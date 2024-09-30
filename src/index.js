import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import { CartProvider } from './context/CartContext'; // Import CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap with Redux Provider */}
      <CartProvider> {/* Wrap with CartProvider */}
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);


