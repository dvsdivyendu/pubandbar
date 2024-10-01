import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { useSelector } from 'react-redux'; 
import '../components/Header.css';
import logoImage from '../assets/icon.jpg';

const Header = () => {
  const cart = useSelector(state => state.cart); // Access cart state

  // Calculate total items in the cart
  const totalItems = Object.keys(cart).reduce((total, itemId) => {
    return total + (cart[itemId].quantity || 0); // Ensure quantity is accessed correctly
  }, 0);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="header-logo" id='logo-img' />
        <div className="logo">The Beer</div>
      </div>
      <nav className="navigation">
        <ul>
          <li><NavLink to="/" className="link">Home</NavLink></li>
          <li><NavLink to="/menu" className="link">Menu</NavLink></li>
          <li><NavLink to="/reservations" className="link">Reservations</NavLink></li>
          <li><NavLink to="/event" className="link">Events</NavLink></li>
          <li><NavLink to="/feedback" className="link">Contact Us</NavLink></li>
          <li>
            <NavLink to="/cart" className="link cart-link">
              <div className="cart-icon-container">
                <FontAwesomeIcon icon={faShoppingCart} />
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>} {/* Display item count */}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="link">
              Login <FontAwesomeIcon icon={faUser} style={{ color: '#63E6BE' }} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
