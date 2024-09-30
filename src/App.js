import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservation';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Header from './components/header';
import Footer from './components/footer'; 
import Signup from './pages/signup';
import Gallery from './pages/gallery';
import Events from './pages/Events';
import Feedback from './pages/Feedback';
import Cart from './pages/cart';

const App = () => {
  const notify = (message) => {
    toast(message);
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/signup" element={<Signup setToast={notify} />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login setToast={notify} />} /> {/* Pass setToast to Login */}
            <Route path="/event" element={<Events />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
