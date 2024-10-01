// pages/Cart.js
import React from 'react';
import './cart.css'; // Import your CSS styles
import { useSelector, useDispatch } from 'react-redux'; 
import { removeItem, clearCart } from '../slices/slice';
import beer from '../assets/beer.jpg'; 
import food from '../assets/food.jpg';
import Mojito from '../assets/mojito.jpg';
import wings from '../assets/wings.jpg';
import nachos from '../assets/nachos.jpg';

const menuItems = [
    { id: 1, name: 'Craft Beer', details: 'A refreshing craft beer with hoppy notes.', price: 5.00, image: beer, type: 'beer' },
    { id: 2, name: 'Mojito', details: 'A classic cocktail with mint and lime.', price: 8.00, image: Mojito, type: 'cocktail' },
    { id: 3, name: 'Honey Chicken', details: 'Crispy Chicken topped with cheese and honey.', price: 6.50, image: food, type: 'snack' },
    { id: 4, name: 'Wings', details: 'Spicy buffalo wings served with blue cheese dressing.', price: 9.00, image: wings, type: 'snack' },
    { id: 5, name: 'Onion Rings', details: 'Crispy onion rings served with a tangy sauce.', price: 5.50, image: nachos, type: 'snack' },
    { id: 6, name: 'IPA Beer', details: 'A bold and hoppy India Pale Ale.', price: 6.00, image: beer, type: 'beer' },
    { id: 7, name: 'Pina Colada', details: 'A tropical blend of rum, coconut cream.', price: 9.50, image: beer, type: 'cocktail' },
    { id: 8, name: 'Whiskey Sour', details: 'A classic cocktail with whiskey.', price: 7.00, image: beer, type: 'cocktail' },
    { id: 9, name: 'Stout Beer', details: 'A rich and creamy stout with coffee.', price: 6.50, image: beer, type: 'beer' },
    { id: 10, name: 'Tacos', details: 'Soft tacos filled with seasoned meat.', price: 8.00, image: nachos, type: 'snack' },
    { id: 11, name: 'Nachos', details: 'Crispy nachos topped with cheese and jalapeños.', price: 6.50, image: nachos, type: 'snack' },
];

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart); // Access cart state

    // Calculate total price
    const totalPrice = Object.keys(cart).reduce((total, itemId) => {
        const item = menuItems.find(item => item.id === Number(itemId));
        return total + (item ? item.price * cart[itemId].quantity : 0);
    }, 0);

    const handleCheckout = () => {
        // Logic for proceeding to checkout can be added here
        alert('Proceeding to checkout!');
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {Object.keys(cart).length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <div className="cart-items">
                        {Object.keys(cart).map(itemId => {
                            const item = menuItems.find(item => item.id === Number(itemId));
                            return (
                                item && (
                                    <div className="cart-item" key={itemId}>
                                        <img src={item.image} alt={item.name} className="cart-item-image" />
                                        <div className="cart-item-details">
                                            <h3>{item.name}</h3>
                                            <p>Price: ${(item.price).toFixed(2)}</p>
                                            <p>Quantity: {cart[itemId].quantity}</p>
                                            <p>Total: ${(item.price * cart[itemId].quantity).toFixed(2)}</p>
                                            <button onClick={() => dispatch(removeItem({ id: itemId }))}>Remove</button>
                                        </div>
                                    </div>
                                )
                            );
                        })}
                    </div>
                    <div className="cart-summary">
                        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                        <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
