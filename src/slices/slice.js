// src/slices/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {},
  reducers: {
    // Define your reducers here
    addItem: (state, action) => {
      // Example reducer to add an item
      state[action.payload.id] = action.payload;
    },
    removeItem: (state, action) => {
      // Example reducer to remove an item
      delete state[action.payload.id];
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem } = exampleSlice.actions;

// Export the reducer to be used in the store
export default exampleSlice.reducer;
