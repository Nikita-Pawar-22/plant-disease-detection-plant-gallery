import React, { useState } from 'react';
import axios from 'axios';
import './PredictionTool.css';

const PredictionTool = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [predictionResult, setPredictionResult] = useState(null);
    const [plantInfo, setPlantInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const fileSizeLimit = 5 * 1024 * 1024; // 5MB
            if (!selectedFile.type.startsWith('image/')) {
                alert("Please upload a valid image file.");
            } else if (selectedFile.size > fileSizeLimit) {
                alert("File size exceeds the 5MB limit.");
            } else {
                setFile(selectedFile);
                setPreview(URL.createObjectURL(selectedFile));
                setPredictionResult(null);
                setPlantInfo(null);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true); // Start loading

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            const { message, plant } = response.data;
            setPredictionResult(message);
            setPlantInfo(plant);
        } catch (error) {
            console.error('Error during prediction:', error);
            setPredictionResult("Prediction failed. Please try again.");
            setPlantInfo(null);
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <div className="prediction-container">
            <form className="prediction-form" onSubmit={handleSubmit}>
                <h2 className="form-title">🌿 Know Your Plant</h2>
                <p className="form-subtitle">Discover nature through a single snap</p>
                <input type="file" onChange={handleFileChange} accept="image/*" />
                <button type="submit">Predict</button>
            </form>

            {loading && <div className="loading-spinner">Loading...</div>}

            {preview && !loading && (
                <div className="image-preview">
                    <h3>Image Preview:</h3>
                    <img src={preview} alt="Preview" className="preview-image" />
                </div>
            )}

            {predictionResult && !loading && (
                <div className="prediction-result">
                    <p><strong>{predictionResult}</strong></p>
                </div>
            )}

            {plantInfo && !loading && (
                <div className="plant-card">
                    {/* <img src={plantInfo.image_url} alt={plantInfo.name} className="plant-img" /> */}
                    <div className="plant-details">
                        <h3 className="plant-title">{plantInfo.name}</h3>
                        <p><strong>Scientific Name:</strong> {plantInfo.scientific_name}</p>
                        <p><strong>Description:</strong> {plantInfo.description}</p>
                        <p><strong>Uses:</strong> {plantInfo.uses}</p>
                        <p><strong>Benefits:</strong> {plantInfo.benefits}</p>
                        <p><strong>Interesting Fact:</strong> {plantInfo.interesting_fact}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PredictionTool;
