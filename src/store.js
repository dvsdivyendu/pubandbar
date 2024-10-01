// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/slice'; // Now this should exist

const store = configureStore({
  reducer: {
    cart: cartReducer, // Include the cart reducer
  },
});

export default store;
