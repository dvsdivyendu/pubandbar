import React, { useState } from 'react';
import './signup.css';

const Signup = ({ setToast }) => {
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
    setError(''); // Reset error on input change
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Example validation (at least 6 characters)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!validatePassword(formData.password)) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Retrieve existing user data from local storage
    const existingData = JSON.parse(localStorage.getItem('userData')) || [];

    // Ensure existingData is an array
    if (!Array.isArray(existingData)) {
      setError('Error retrieving user data. Please try again.');
      return;
    }

    // Check for duplicate email
    if (existingData.some(user => user.email === formData.email)) {
      setError('Email already exists. Please log in or use a different email.');
      return;
    }

    // Add the new user data to the array
    existingData.push(formData);

    // Save the updated array back to local storage
    localStorage.setItem('userData', JSON.stringify(existingData));

    // Show success message
    setToast('Signup successful! Please log in.');
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
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
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
