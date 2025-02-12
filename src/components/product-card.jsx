import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const ProductCard = ({product}) => {
    const {addToCart} = useContext(CartContext)

    const handleAddToCart = (item) =>{
        addToCart(item)
    }

    return (
                <div className="product-card" key={product.id}>
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="product-image"
                    />
                    <div className="product-details">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">Ksh {Number(product.price)}</p>
                        <button 
                            className="btn"
                            onClick={() => handleAddToCart(product)}
                        > Add to Cart
                        </button>
                    </div>
                </div>
        
    );
};

export default ProductCard;