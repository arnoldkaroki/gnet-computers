import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])


    
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });

    };

    
    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

   
    const updateQuantity = (itemId, quantity) => {
        setCartItems((prevItems) => 
            prevItems.map((item) => 
                item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    useEffect(()=>{
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
    },[cartItems])

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
