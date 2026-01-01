// src/components/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signUp.css';

function SignUp({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isLogin ? 'http://localhost:5000/login' : 'http://localhost:5000/register';
        const payload = isLogin 
            ? { username, password } 
            : { username, email, password };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            localStorage.setItem('isLoggedIn', 'true');
            onLogin();
            setMessage('Success! Redirecting...');
            setTimeout(() => navigate('/'), 2000);
        } else {
            const { message } = await response.json();
            setMessage(message);
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                    <table className="login-table">
                        <tbody>
                            <tr>
                                <td><label>Username:</label></td>
                                <td>
                                    <input 
                                        type="text" 
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)} 
                                    />
                                </td>
                            </tr>
                            {!isLogin && (
                                <tr>
                                    <td><label>Email:</label></td>
                                    <td>
                                        <input 
                                            type="email" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                        />
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td><label>Password:</label></td>
                                <td>
                                    <input 
                                        type="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-footer">
                        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                        <span onClick={toggleForm}>
                            {isLogin ? 'New user? Sign up here' : 'Already have an account? Log in here'}
                        </span>
                    </div>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default SignUp;