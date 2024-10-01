// src/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addItem: (state, action) => {
      const { id, quantity } = action.payload;
      // Add or update the item in the cart
      state[id] = { 
        ...(state[id] || {}), 
        quantity: (state[id]?.quantity || 0) + quantity 
      };
    },
    removeItem: (state, action) => {
      // Remove the item from the cart
      delete state[action.payload.id];
    },
    clearCart: (state) => {
      // Reset the cart to an empty object
      return {};
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
