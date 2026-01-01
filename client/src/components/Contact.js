// src/components/Contact.js
import React from 'react';
import './Contact.css';
import contactUsImage from '../assets/C.jpg'; // ✅ Use relative path from src

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="glass-contact-box">
                <img src={contactUsImage} alt="Contact Us" className="contact-image" />
                <h2>Contact Us</h2>
                <p>If you have any questions or feedback, feel free to reach out:</p>
                <div className="contact-details">
                    <p><strong>Email:</strong> support@plantdetection.com</p>
                    <p><strong>Phone:</strong> +123 456 7890</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
