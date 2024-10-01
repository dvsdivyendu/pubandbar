import React, { useState, useEffect } from 'react';
import './Menu.css';
import beer from '../assets/beer.jpg';
import food from '../assets/food.jpg';
import Mojito from '../assets/mojito.jpg';
import wings from '../assets/wings.jpg';
import nachos from '../assets/nachos.jpg';
import { useDispatch } from 'react-redux'; 
import { addItem } from '../slices/slice'; // Import addItem action
import { ToastContainer, toast } from 'react-toastify'; // Import toast

// Define menuItems outside of the component for export
export const menuItems = [
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

const MenuCart = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState({});

    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (filter ? item.type === filter : true)
    );

    useEffect(() => {
        const initialQuantities = {};
        menuItems.forEach(item => {
            initialQuantities[item.id] = 1; // Set default quantity to 1
        });
        setQuantities(initialQuantities);
    }, []);

    const handleQuantityChange = (id, delta) => {
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 1) + delta, 1) // Ensure quantity doesn't go below 1
        }));
    };

    const handleAddToCart = (item) => {
        const quantity = quantities[item.id];
        if (quantity > 0) {
            dispatch(addItem({ id: item.id, quantity })); // Dispatch action to add item to cart
            //handleQuantityChange(item.id, -quantity); // Reset quantity after adding to cart
            toast.success(`${quantity} ${item.name} has been added to your cart!`); // Show toast notification
        }
    };

    return (
        <div className="menu-cart">
            <header className='menuheader'>
                <h1>Pub & Bar Menu</h1>
                <div className="search-filter">
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                        <option value="">All</option>
                        <option value="beer">Beer</option>
                        <option value="cocktail">Cocktail</option>
                        <option value="snack">Snack</option>
                    </select>
                </div>
            </header>

            <div className="menu-items">
                {filteredItems.map(item => (
                    <div className="menu-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="item-image" />
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-details">{item.details}</p>
                        <p className="item-price">${item.price.toFixed(2)}</p>
                        <div className="cart-actions">
                            <button
                                className="decrease-button"
                                onClick={() => handleQuantityChange(item.id, -1)}
                            >
                                -
                            </button>
                            <input
                                type="number"
                                min="1"
                                value={quantities[item.id]}
                                readOnly
                                className="item-count"
                            />
                            <button
                                className="increase-button"
                                onClick={() => handleQuantityChange(item.id, 1)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="add-to-cart"
                            onClick={() => handleAddToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <ToastContainer /> {/* Include the toast container here */}
        </div>
    );
};

export default MenuCart; // Keep default export for the component
