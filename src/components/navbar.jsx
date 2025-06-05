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
        <nav className="nav">
            <div className="navbar-brand">
                <Link to="/" className="nav"> 
                    <h1 className='Gnet'>Gnet Computers</h1>
                </Link>  
            </div>
            <SearchBar onSearch={(query) => console.log(query)} />


        <div>
         <ul className={`navbar ${isOpen ? "show" : ""}`} ref={menuRef}>
            <li><a href='/'>Home</a></li>
            <li><a href='/shop'>Shop</a></li>
            <li><a href='/blog'>Blog</a></li>
            <li><a href='/checkout'>Checkout</a></li>
            <li><a href='/services'>Services</a></li>  
            <a href='#' id='close'><i className='far far-times'> </i></a>
         </ul>
        </div> 
        <div id='mobile'>
            <a className='active' href='/shop'><i class="far fa-shopping-bag"></i></a>
            <i id='bar' className='fas fa-outdent' onClick={toggleMenu}></i>
        </div>
        </nav>
    );
};

export default Navbar;