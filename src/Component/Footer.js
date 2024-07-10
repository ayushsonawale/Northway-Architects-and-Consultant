import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()}&nbsp;
                <a href="https://www.instagram.com/northway_architects/">Northway Architects & Consultants</a>&nbsp;
                All rights reserved | Designed and Developed by <a href="https://www.linkedin.com/in/ayush-sonawale/">Ayush Sonawale</a>
            </p>
        </footer>
    );
};

export default Footer;
