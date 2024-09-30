// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/slice'; // Now this should exist

const store = configureStore({
  reducer: {
    example: exampleReducer, // Include your slice reducer here
  },
});

export default store;
