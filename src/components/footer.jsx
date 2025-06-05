import React from 'react';
import '../css/Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
       <footer className='section p-1'>
        <div className='col'>
            <image className='logo' src='?' alt=""></image>
            <h4>Contact</h4>
            <p><strong>Address:</strong> Ruiru, Kiambu, Kenya</p>
            <p><strong>Phone:</strong> 0717503038</p>
            <p><strong>Hours:</strong> 0800-1700, Mon-Fri</p>
            <div className='follow'>
                <h4>Follow Us</h4>
                <div className="icon">
                    <i><FaFacebook /></i>
                    <i><FaTwitter /></i>
                    <i><FaInstagram /></i>
                    <i><FaWhatsapp /></i>
                </div>
            </div>
        </div>
        <div className='col'>
            <h4>About</h4>
            <a href="/about">About Us.</a>
            <a href="/privacy">Privacy Policy.</a>
            <a href="/terms">Terms & Conditions.</a>
            <a href="/contact">Contact Us.</a>                    
        </div>

        <div className='col'>
            <h4>Account</h4>
            <a href="/login">Sign In</a>
            <a href="/cart">View Cart.</a>
            <a href="/contact">Track My Order</a>
            <a href="/contact">Help</a> 
        </div>

        <div className='col install'>
        <p>Secured Payment Gateways</p>
        <img src='/images/p1.jpg' alt="Payment Options"></img>
        </div>
        
        <div className='copyright'>
            <p>2025 Gnet Computers. All rights reserved©</p>
        </div>
    </footer>
    );
};

export default Footer;