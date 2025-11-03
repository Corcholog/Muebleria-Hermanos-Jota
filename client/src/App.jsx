// client/src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'; 
import './App.css';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'products' | 'contact' | 'detail' | 'cart'
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Carrito: líneas con cantidad
  const [cart, setCart] = useState([]);

  const toggleSidebar = () => setIsSidebarOpen((o) => !o);

  const navigateTo = (view) => {
    setCurrentView(view);
    setIsSidebarOpen(false);
  };

  const goToDetail = (producto) => {
    setSelectedProduct(producto);
    setCurrentView('detail');
  };

  // ---- Helpers de carrito (respetando tu estilo) ----
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
        onCartClick={() => navigateTo('cart')} // <-- para ir a la vista carrito
      />

      <Sidebar isOpen={isSidebarOpen} navigateTo={navigateTo} />

      <main>
        {currentView === 'home' && (
          <>
            <HeroBanner navigateTo={navigateTo} />
            <ProductList
              setSelectedProduct={goToDetail}
              handleAddToCart={handleAddToCart}
              limit={5}
            />
          </>
        )}

        {currentView === 'products' && (
          <ProductList
            setSelectedProduct={goToDetail}
            handleAddToCart={handleAddToCart}
            limit={null}
          />
        )}

        {currentView === 'contact' && <ContactForm />}

        {currentView === 'detail' && (
          <ProductDetail
            producto={selectedProduct}
            volver={() => setCurrentView('home')}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentView === 'cart' && (
          <Cart
            items={cart}
            onIncrement={incrementQty}
            onDecrement={decrementQty}
            onRemove={removeFromCart}
            onClear={clearCart}
            volver={() => setCurrentView('products')}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
