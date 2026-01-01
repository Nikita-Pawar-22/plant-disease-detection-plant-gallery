// src/components/PlantGallery.js
import React, { useState } from 'react';
import './PlantGallery.css';
import plantData from './plantData';

const PlantGallery = () => {
    const [selectedPlant, setSelectedPlant] = useState(null);

    const handleCardClick = (plant) => {
        setSelectedPlant(plant);
    };

    const handleBack = () => {
        setSelectedPlant(null);
    };

    return (
        <div className="plant-gallery-container">
            {selectedPlant ? (
                <div className="plant-detail">
                    <button className="close-button" onClick={handleBack}>✖</button>
                    <img src={selectedPlant.image} alt={selectedPlant.name} className="plant-detail-img" />
                    <h2>{selectedPlant.name}</h2>
                    <p><em>{selectedPlant.scientificName}</em></p>
                    <p>{selectedPlant.description}</p>
                    {selectedPlant.care && (
                        <div className="plant-care">
                            <div className="plant-care-item">☀️ Light: {selectedPlant.care.light}</div>
                            <div className="plant-care-item">💧 Water: {selectedPlant.care.water}</div>
                            <div className="plant-care-item">🌡️ Temperature: {selectedPlant.care.temperature}</div>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    {/* <h1 className="gallery-heading">Explore Plant Types</h1> */}
                    <div className="plant-card-grid">
                        {plantData.map((plant, index) => (
                            <div key={index} className="plant-card" onClick={() => handleCardClick(plant)}>
                                <img src={plant.image} alt={plant.name} />
                                <h3>{plant.name}</h3>
                                <p>{plant.shortDescription}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default PlantGallery;
