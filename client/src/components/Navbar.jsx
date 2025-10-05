import React from 'react';

function Navbar({ toggleSidebar, navigateTo, cartItemCount}) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="menu__container" onClick={toggleSidebar}>
          <div className="menu-toggle" aria-label="Abrir menu" id="menu">
            <img src="/imagenes/menu-svgrepo-com.svg" alt="Abrir menú" />
          </div>
        </div>
        <nav className="nav__bar" aria-label="Navegacion Principal">
          <div className="logo__container">
            <a onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
              <img src="/imagenes/logo.svg" alt="Logo" className="logo-item" />
              <h1 className="nombre">Hermanos Jota</h1>
            </a>
          </div>
          <div className="nav__container">
            <ul className="nav__links">
              <li className="nav__items">
                <a onClick={() => navigateTo('products')} style={{ cursor: 'pointer' }}>Productos</a>
              </li>
              <li className="nav__items">
                <a onClick={() => navigateTo('contact')} style={{ cursor: 'pointer' }}>Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="funcionalidades__container">
          <div className="account-widget">
            <a href="#">
              <img src="/imagenes/user-svgrepo-com.svg" alt="Cuenta" />
            </a>
          </div>
          <div className="cart-widget">
            <a href="#" id="cart-btn">
              <img src="/imagenes/shopping-cart-svgrepo-com.svg" alt="Carrito" />
              <span id="cart-count">{cartItemCount}</span>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;