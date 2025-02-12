import React, { useContext, useState } from 'react';
import '../css/top-header.css';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import { LuLogIn } from "react-icons/lu"
import { CartContext } from '../context/CartContext';

const TopHeader = () => {
    const {cartItems} = useContext(CartContext)

    return (
        <header className="top-header">
            <div className="top-left">
                <span className='top-phone'>
                
                 0717503038   |    
                </span>
                <span className='top-email'>
                |    arnoldkaroki47@gmail.com
                </span>
            </div>
            
            <div className="top-right">
                <ul className='top-header-links'>
                    
                    <Link to="/login" className='login-icon'>
                    <LuLogIn className='login-icon' />
                    </Link>
                    
                    <div className="cart-link">
                    <Link to="/cart" className="cart-icon">
                    <BsCart className='cart-icon'/>

                            {cartItems.length > 0 && (
                                <span className="cart-counter">{cartItems.length}</span>
                            )}
                        </Link>
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default TopHeader;