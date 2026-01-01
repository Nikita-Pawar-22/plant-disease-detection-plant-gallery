import os
import json
import uuid
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash, check_password_hash
from pymongo import MongoClient
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.efficientnet import preprocess_input
import numpy as np

# --- Flask App Setup ---
app = Flask(__name__)
CORS(app)

# --- Configurations ---
UPLOAD_FOLDER = 'uploads'
MODEL_PATH = 'plant_model2_final.keras'  # Ensure this model file exists in the same directory
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# --- MongoDB Setup ---
client = MongoClient('mongodb://localhost:27017/')
db = client['plant_identifier_db']
users_collection = db['users']

# --- Load Trained Model ---
model = load_model(MODEL_PATH)

# --- Class Names (Model's Output Classes) ---
class_names = [
    'Apple___healthy',
    'Blueberry___healthy',
    'Cherry_(including_sour)___healthy',
    'Corn_(maize)___healthy',
    'Grape___healthy',
    'Peach___healthy',
    'Pepper,_bell___healthy',
    'Potato___healthy',
    'Raspberry___healthy',
    'Soybean___healthy',
    'Strawberry___healthy',
    'Tomato___healthy'
]

# --- Utility Function: Check Allowed File Extensions ---
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# ===========================
# ===== AUTH ROUTES =========
# ===========================

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({'message': 'Username and password required'}), 400

    if users_collection.find_one({'username': username}):
        return jsonify({'message': 'Username already exists'}), 409

    hashed_password = generate_password_hash(password)
    user = {'username': username, 'password': hashed_password}
    users_collection.insert_one(user)

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = users_collection.find_one({'username': username})

    if user and check_password_hash(user['password'], password):
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

# ===========================
# ===== PREDICT ROUTE =======
# ===========================

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part in the request'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'message': 'No file selected'}), 400

    if not allowed_file(file.filename):
        return jsonify({'message': 'File type not allowed. Please upload a PNG, JPG, or JPEG image'}), 400

    filename = secure_filename(file.filename)
    unique_filename = f"{uuid.uuid4().hex}_{filename}"
    filepath = os.path.join(UPLOAD_FOLDER, unique_filename)
    file.save(filepath)

    try:
        # --- Preprocess image using EfficientNet's preprocessing ---
        img = image.load_img(filepath, target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array = preprocess_input(img_array)

        # --- Make Prediction ---
        prediction = model.predict(img_array)[0]
        predicted_class_idx = np.argmax(prediction)
        full_class_name = class_names[predicted_class_idx]

        # --- Extract Plant Name ---
        plant_name_raw = full_class_name.split("___")[0]
        plant_name = plant_name_raw.replace("_", " ").replace("(including sour)", " (including sour)").strip()

        # --- Load Plant Info ---
        try:
            with open('Plant.json', 'r', encoding='utf-8') as f:
                plant_data = json.load(f)
        except FileNotFoundError:
            return jsonify({'message': 'Plant data file (Plant.json) not found'}), 500

        # --- Find Plant Info (Exact or Case-Insensitive Match) ---
        plant_info = plant_data.get(plant_name)
        if not plant_info:
            for key in plant_data:
                if key.lower() == plant_name.lower():
                    plant_info = plant_data[key]
                    break

        if not plant_info:
            return jsonify({'message': f'Information not found for: {plant_name}'}), 404

        # --- Prepare Response ---
        response = {
            'message': 'Prediction successful',
            'plant': {
                'name': plant_name,
                'scientific_name': plant_info.get("Scientific Name"),
                'description': plant_info.get("Description"),
                'uses': plant_info.get("Uses"),
                'benefits': plant_info.get("Benefits"),
                'interesting_fact': plant_info.get("Interesting Fact")
            }
        }

        return jsonify(response), 200

    finally:
        # --- Clean up uploaded file ---
        if os.path.exists(filepath):
            os.remove(filepath)

# ===========================
# ===== START SERVER ========
# ===========================

if __name__ == '__main__':
    app.run(debug=True)
