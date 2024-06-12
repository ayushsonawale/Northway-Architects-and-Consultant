import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Northway Architects & Consultants. All rights reserved | Designed and Developed by <a href="https://www.linkedin.com/in/ayush-sonawale/">Ayush Sonawale</a>  </p>
        </footer>
    );
};

export default Footer;
