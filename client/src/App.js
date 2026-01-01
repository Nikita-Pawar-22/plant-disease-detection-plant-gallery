import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import PredictionTool from './components/PredictionTool';
// import RealTimeLearning from './components/RealTimeLearning';
import PlantGallery from './components/PlantGallery';
import About from './components/About';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import SignUp from './components/signUp';

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.3); /* Transparent black color */
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Keep shadow for depth */
    border-radius: 8px; /* Slightly rounded corners */
    position: fixed; /* Fixed position to keep it at the top */
    top: 0; /* Aligns with the top of the page */
    left: 0;
    right: 0;
    z-index: 1000; /* Ensure it’s on top of other elements */
`;

const NavLink = styled(Link)`
    color: white; /* Keep link color white for contrast */
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem 1rem; /* Padding for a better click area */
    transition: background 0.3s, color 0.3s; /* Smooth transitions for hover effects */

    &:hover {
        background: rgba(255, 255, 255, 0.3); /* Light background on hover */
        color: #ffcc00; /* Gold color on hover */
        border-radius: 4px; /* Slightly rounded corners on hover */
    }
`;

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(Boolean(loggedIn));
    }, []);

    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        navigate('/'); // Redirect to home on login
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        navigate('/'); // Redirect to home on logout
    };

    return (
        <div className="App">
            <Nav>
                <NavLink to="/">Home</NavLink>
                {isLoggedIn && (
                    <>
                        <NavLink to="/predict">Prediction Tool</NavLink>
                        <NavLink to="/plants">Plant Gallery</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink onClick={handleLogout}>Logout</NavLink>
                    </>
                )}
                {!isLoggedIn && <NavLink to="/signup">Sign Up</NavLink>}
            </Nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
                {/* Protected routes */}
                {isLoggedIn && (
                    <>
                        <Route path="/predict" element={<PredictionTool />} />
                        <Route path="/plants" element={<PlantGallery />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </>
                )}
            </Routes>
            <Feedback />
        </div>
    );
}

export default App;
