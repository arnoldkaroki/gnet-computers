
import React, { useContext, useState } from 'react';
import '../css/Cart.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router';
export const addToCart = (item, cart, setCart) => {
    setCart([...cart, item]);
  };
  
const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
    const [loading, setLoading] = useState(false);

   
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleIncreaseQuantity = (itemId) => {
        updateQuantity(itemId, cartItems.find(item => item.id === itemId).quantity + 1);
    };

    const handleDecreaseQuantity = (itemId) => {
        const currentQuantity = cartItems.find(item => item.id === itemId).quantity;
        updateQuantity(itemId, currentQuantity - 1);
    };

    const handleAddToCart = (item) => {
        setLoading(true);
        
        setTimeout(() => {
            addToCart(item);
            setLoading(false);
        }, 1500);
    };

    console.log(cartItems)

    return (
        <div className="cart-container">
            <h1 className='Your'>Your Cart</h1>

            {loading && <p>Loading...</p>}

            <ul className="cart-items">
                {cartItems.length === 0 ? (
                    <li className='empty'>Your cart is empty.</li>
                ) : (
                    cartItems.map(item => (
                        <li key={item.id} className="cart-item">
                            <span>{item.name}</span>
                            <span>Ksh {Number(item?.price)}</span>

                           
                            <div className="quantity-controls">
                                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                            </div>

                            <button 
                                className="remove-item-button" 
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))
                )}
            </ul>

            {cartItems.length > 0 && (
                <div className="cart-total">
                    <h2>Total: Ksh. {totalPrice.toFixed(2)}</h2>
                </div>
            )}
            
           
            
            <div className="add-item-to-cart">
                <button className='btn'>
                    <Link to="/checkout">
                   Proceed To Checkout
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Cart;
