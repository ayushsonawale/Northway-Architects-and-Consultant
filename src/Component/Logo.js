// Logo.js
import React from 'react';
import logo from '../Assets/Logo.png'
import './Logo.css'; // CSS file for styling

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
        </div>
    );
};

export default Logo;
