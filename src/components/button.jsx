import React from 'react';
import '../css/Button.css'; // Optional: Import a CSS file for styling

const Button = ({ label, onClick, type = 'button', className = '' }) => {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={`gnet-button ${className}`} // Add a base class and any additional classes
        >
            {label}
        </button>
    );
};

export default Button;