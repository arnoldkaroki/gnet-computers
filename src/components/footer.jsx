import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p className='copyright'>&copy; 2025 Gnet Computers. All rights reserved.</p>
                <nav>
                    <ul>
                        <li><a href="/about">About Us.</a></li>
                        <li><a href="/contact">Contact.</a></li>
                        <li><a href="/privacy">Privacy Policy.</a></li>
                        <li><a href="/terms">Terms of Service.</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;