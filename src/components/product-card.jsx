import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    const handleProductClick = () => {
        window.location.href = `/product/${product.id}`;
    };

    return (
        <div className="product-card" key={product.id} onClick={handleProductClick}>
            <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
            />
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">Ksh {Number(product.price)}</p>
                <div className='star'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                </div>
                <button 
                    className="btn"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent the card click event
                        handleAddToCart(product);
                    }}
                > 
                    <FaShoppingCart />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
