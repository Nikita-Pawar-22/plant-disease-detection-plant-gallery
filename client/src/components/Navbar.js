// src/components/NavBar.js
import React from 'react';
import './Navbar.css'; // Import CSS for styling

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/realtime-learning">Real-Time Learning</a>
                <a href="/signature-prediction">Plant Prediction</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/logout">Logout</a>
            </div>
        </nav>
    );
};

export default NavBar;
