import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productToAdd) => {
    setCart((c) => [...c, productToAdd]);
    alert(`"${productToAdd.nombre}" se ha añadido al carrito.`);
  };

  const toggleSidebar = () => setIsSidebarOpen((o) => !o);

  const navigateTo = (view) => {
    setCurrentView(view);
    setIsSidebarOpen(false);
  };

  const goToDetail = (producto) => {
    setSelectedProduct(producto);
    setCurrentView('detail');
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} navigateTo={navigateTo} cartItemCount={cart.length} />
      <Sidebar isOpen={isSidebarOpen} navigateTo={navigateTo} />

      <main>
        {currentView === 'home' && (
          <>
            <HeroBanner navigateTo={navigateTo} />
            <ProductList setSelectedProduct={goToDetail} handleAddToCart={handleAddToCart} limit={5} />
          </>
        )}

        {currentView === 'products' && (
          <ProductList setSelectedProduct={goToDetail} handleAddToCart={handleAddToCart} limit={null} />
        )}

        {currentView === 'contact' && <ContactForm />}

        {currentView === 'detail' && (
          <ProductDetail
            producto={selectedProduct}
            volver={() => setCurrentView('home')}
            onAddToCart={handleAddToCart}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;