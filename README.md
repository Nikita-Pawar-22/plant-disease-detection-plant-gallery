# Smart Disease Detection & Management (SDAM_CP)

An intelligent plant disease detection and management system powered by machine learning. This application uses deep learning models to identify plant diseases from images and provides helpful guidance for plant care.

## 🌿 Features

- **Plant Disease Detection**: AI-powered image recognition to identify plant diseases
- **User Authentication**: Secure login and registration system
- **Plant Gallery**: Browse and learn about various plant species
- **Real-time Predictions**: Instant disease detection from uploaded images
- **User Dashboard**: Track your plant health and history
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Contact & Feedback**: Easy communication channels for user support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Python** (v3.8 or higher) - for the backend
- **pip** - Python package manager

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a Python virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install Python dependencies:
   ```bash
   pip install flask flask-cors tensorflow keras pillow
   ```

4. Run the Flask server:
   ```bash
   python app.py
   ```
   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

## 📚 Available Scripts

In the client directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes, and you'll see any lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode. See the [testing documentation](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes for the best performance. The build is minified with hashed filenames.

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!** Only use this if you need full control over the webpack configuration.

## 📁 Project Structure

```
SDAM_CP/
├── backend/
│   ├── app.py                          # Flask server
│   ├── plant_model2_final.keras       # ML model for disease detection
│   ├── sdam_cp.keras                  # Alternative ML model
│   ├── Plant.json                     # Plant data
│   ├── users.db                       # User database
│   ├── plant_images/                  # Sample plant images
│   └── uploads/                       # User uploaded images
└── client/
    ├── public/                        # Static files
    ├── src/
    │   ├── components/                # React components
    │   │   ├── Home.js
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   ├── Dashboard.js
    │   │   ├── PredictionTool.js
    │   │   ├── PlantGallery.js
    │   │   ├── About.js
    │   │   ├── Contact.js
    │   │   └── Navbar.js
    │   ├── assets/                    # Images and media
    │   ├── App.js                     # Main App component
    │   └── index.js                   # Entry point
    └── package.json
```

## 🔗 API Endpoints

The backend provides the following key endpoints:

- **POST /api/predict** - Upload an image and get disease prediction
- **POST /api/register** - Register a new user
- **POST /api/login** - User login
- **GET /api/plants** - Get plant information
- **GET /api/dashboard** - Get user dashboard data

## 🛠️ Technologies Used

### Frontend
- React.js
- CSS3
- JavaScript ES6+

### Backend
- Flask (Python web framework)
- TensorFlow & Keras (Deep Learning)
- Pillow (Image processing)
- SQLite (Database)

### Machine Learning
- Convolutional Neural Networks (CNN)
- Pre-trained models for plant disease classification

## 💾 Database

The application uses SQLite for user data storage. The `users.db` file contains:
- User credentials
- User profile information
- Upload history

## 🔐 Security Notes

- Passwords are securely hashed before storage
- API endpoints should be protected with authentication tokens in production
- Sensitive configuration should be stored in environment variables

## 📝 Usage

1. **Register/Login**: Create an account or login to access features
2. **Upload Image**: Go to the Prediction Tool and upload a plant image
3. **Get Results**: Receive AI-powered disease diagnosis
4. **Learn**: Browse the Plant Gallery for plant care tips
5. **Contact**: Use the Contact page to reach out with questions

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 or 5000 is already in use:
- For React: `PORT=3001 npm start`
- For Flask: Modify the port in `app.py`

### CORS Issues
Ensure the Flask backend is running and CORS is properly configured in `app.py`

### Model Not Found
Ensure the `.keras` model files are in the backend directory

## 📧 Support

For issues, questions, or feedback, please use the Contact page in the application or check the Feedback section.

## 📄 License

This project is part of the Smart Disease Detection & Management system.

## 🙏 Acknowledgments

- Plant disease dataset sources
- TensorFlow and Keras communities
- React.js documentation and community
