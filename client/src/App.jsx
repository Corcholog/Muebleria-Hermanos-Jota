import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'; 
import './App.css';
import ProductDetail from './components/ProductDetail';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // estado que mantiene la vista actual
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // funcion para cambiar de vista, manteniendo el diseño SPA
  const navigateTo = (view) => {
    setCurrentView(view);
    setIsSidebarOpen(false); 
  };

  // función de navegacion para detalle producto
  const goToDetail = (producto) => {
    setSelectedProduct(producto);
    setCurrentView('detail');
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} navigateTo={navigateTo} />
      <Sidebar isOpen={isSidebarOpen} />
      
      <main>
        {currentView === 'home' && (
          <>
            <HeroBanner />
            <ProductList setSelectedProduct={goToDetail} />
          </>
        )}
        
        {currentView === 'contact' && <ContactForm />}
        
        {currentView === 'detail' && (<ProductDetail producto={selectedProduct} volver={()=> setCurrentView('home')}/>)}
      </main>
      
      <Footer />
    </>
  );
}

export default App;