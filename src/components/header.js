import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon
import './Header.css';
import logoImage from '../assets/icon.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
          <img src={logoImage} alt="Logo" className="header-logo" id='logo-img'/>
        <div className="logo">The Beer</div>
      </div>
      <nav className="navigation">
        <ul>
          <li><NavLink to="/" className="link">Home</NavLink></li>
          <li><NavLink to="/menu" className="link">Menu</NavLink></li>
          <li><NavLink to="/reservations" className="link">Reservations</NavLink></li>
          <li><NavLink to="/event" className="link">Events</NavLink></li>
          <li><NavLink to="/feedback" className="link">Contact Us</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
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
