import React, { useState } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

const Login = ({ setToast }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(''); // Clear any previous error messages
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate email
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Retrieve existing user data from local storage
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];

    // Check if the entered email and password match any stored user
    const userExists = storedData.some(user => user.email === formData.email && user.password === formData.password);

    if (userExists) {
      setToast('Login successful!');
    } else {
      setToast('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <NavLink to="/signup" className="link">Sign Up</NavLink>
      </p>
    </div>
  );
};

export default Login;
