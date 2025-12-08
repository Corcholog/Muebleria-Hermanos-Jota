import React, { useState, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroBanner from './pages/HeroBanner';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';
import ContactForm from './pages/ContactForm';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import { CartContext } from './context/CartContext';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register'
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const { cart, addItem, updateQuantity, removeItem, clearCart } =
    useContext(CartContext);

  const toggleSidebar = () => setIsSidebarOpen((o) => !o);

  const navigateTo = (path) => {
    setIsSidebarOpen(false);
    navigate(path);
  };

  const cartCount = cart.reduce((acc, it) => acc + it.cantidad, 0);

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        navigateTo={navigateTo}
        cartItemCount={cartCount}
        onCartClick={() => navigateTo('cart')}
      />

      <Sidebar isOpen={isSidebarOpen} navigateTo={navigateTo} />

      <main>
        <Routes>
          {/* Página principal con destacados */}
          <Route
            path="/"
            element={
              <>
                <HeroBanner navigateTo={navigateTo} />
                <ProductList handleAddToCart={addItem} limit={4} />
              </>
            }
          />

          <Route
            path="/products"
            element={<ProductList handleAddToCart={addItem} />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetail onAddToCart={addItem} />}
          />

          <Route path="/contact" element={<ContactForm />} />

          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
