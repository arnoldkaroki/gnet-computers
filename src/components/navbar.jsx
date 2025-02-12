import React from 'react';
import '../css/navbar.css'; 
import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar"> 
                  <h1 className='Gnet'>Gnet Computers</h1>
                </Link>  
            </div>
            <SearchBar onSearch={(query) => console.log(query)} />

            <ul className="navbar-links">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/checkout">Checkout</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    );
};
<Link to="/login" className="login-link">Login</Link>
export default Navbar;