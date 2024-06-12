import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
