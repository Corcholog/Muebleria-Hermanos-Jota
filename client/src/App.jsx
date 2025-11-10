import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroBanner from './pages/HeroBanner';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';
import ContactForm from './pages/ContactForm';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart'; 
import './App.css';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen((o) => !o);
  
  const navigateTo = (path) => {
    setIsSidebarOpen(false);
    navigate(path);
  };

  const handleAddToCart = (productToAdd) => {
    setCart((prev) => {
      const existe = prev.find((it) => it.id === productToAdd.id);
      if (existe) {
        return prev.map((it) =>
          it.id === productToAdd.id ? { ...it, cantidad: it.cantidad + 1 } : it
        );
      }
      // agregamos con cantidad=1
      return [...prev, { ...productToAdd, cantidad: 1 }];
    });
    alert(`"${productToAdd.nombre}" se ha añadido al carrito.`);
  };

  const incrementQty = (id) => {
    setCart((prev) =>
      prev.map((it) => (it.id === id ? { ...it, cantidad: it.cantidad + 1 } : it))
    );
  };

  const decrementQty = (id) => {
    setCart((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, cantidad: it.cantidad - 1 } : it))
        .filter((it) => it.cantidad > 0) // si llega a 0, se quita
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((it) => it.id !== id));
  };

  const clearCart = () => setCart([]);

  // Cantidad total para el badge del Navbar
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
          <Route path="/" element={
            <>
              <HeroBanner navigateTo={navigateTo} />
              <ProductList handleAddToCart={handleAddToCart} limit={4}/>
            </>
          }/>
          
          <Route path="/products" element={<ProductList handleAddToCart={handleAddToCart} />}/>
          <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />}/>
          <Route path="/contact" element={<ContactForm />}/>
          <Route path="/cart" element={<Cart items={cart} onIncrement={incrementQty} onDecrement={decrementQty} onRemove={removeFromCart} onClear={clearCart} volver={() => navigateTo('/products')}/>}/>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
