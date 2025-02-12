import React from 'react';
import '../css/Header.css'; 
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>GNet Computers</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;