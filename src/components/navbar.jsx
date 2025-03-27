import React, { useState, useEffect, useRef } from 'react';
import '../css/navbar.css'; 
import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar"> 
                    <h1 className='Gnet'>Gnet Computers</h1>
                </Link>  
            </div>
            <SearchBar onSearch={(query) => console.log(query)} />

            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <ul className={`navbar-links ${isOpen ? "show" : ""}`} ref={menuRef}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
                <li><Link to="/checkout" onClick={closeMenu}>Checkout</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
            <Link to="/login" className="login-link" onClick={closeMenu}>Login</Link>
        </nav>
    );
};

export default Navbar;