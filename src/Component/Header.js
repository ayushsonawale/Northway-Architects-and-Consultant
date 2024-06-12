import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;
