import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm'; 
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // estado que mantiene la vista actual
  const [currentView, setCurrentView] = useState('home');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // funcion para cambiar de vista, manteniendo el diseño SPA
  const navigateTo = (view) => {
    setCurrentView(view);
    setIsSidebarOpen(false); 
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} navigateTo={navigateTo} />
      <Sidebar isOpen={isSidebarOpen} />
      
      <main>
        {currentView === 'home' && (
          <>
            <HeroBanner />
            <ProductList />
          </>
        )}
        
        {currentView === 'contact' && <ContactForm />}
        
        {/* Falta agregar la pagina completa de productos */}
        {/* {currentView === 'products' && <CatalogoCompleto />} */}
      </main>
      
      <Footer />
    </>
  );
}

export default App;