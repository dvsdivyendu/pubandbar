// context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({}); // State for cart items

    const addToCart = (id, quantity) => {
        setCart(prevCart => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + quantity // Update quantity
        }));
    };

    const removeFromCart = (id) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            delete newCart[id]; // Remove item
            return newCart;
        });
    };

    const clearCart = () => {
        setCart({}); // Clear cart
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
