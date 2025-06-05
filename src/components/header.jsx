import React from 'react';
import '../css/Header.css'; 
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>GNet Computers</h1>
            </div>
        </header>
    );
};

export default Header;