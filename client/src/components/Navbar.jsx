import React from 'react';
import { Link } from 'react-router-dom'

function Navbar({ toggleSidebar, cartItemCount }) {

  return (
    <header className="header">
      <div className="header__container">
        {/* Menú lateral */}
        <div
          className="menu__container"
          onClick={toggleSidebar}
          onKeyDown={(e) => e.key === 'Enter' && toggleSidebar?.()}
          role="button"
          tabIndex={0}
          aria-label="Abrir menú lateral"
        >
          <div className="menu-toggle" id="menu">
            <img src="/imagenes/menu-svgrepo-com.svg" alt="Abrir menú" />
          </div>
        </div>

        {/* Navegación principal */}
        <nav className="nav__bar" aria-label="Navegación principal">
          <div className="logo__container">
            <Link to="/" className="logo__link">
              <img src="/imagenes/logo.svg" alt="Logo" className="logo-item" />
              <h1 className="nombre">Hermanos Jota</h1>
            </Link>
          </div>

          <div className="nav__container">
            <ul className="nav__links">
              <li className="nav__items">
                <Link to="/">Inicio</Link>
              </li>
              <li className="nav__items">
                <Link to="/products">Productos</Link>
              </li>
              <li className="nav__items">
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Iconos cuenta + carrito */}
        <div className="funcionalidades__container">
          <div className="account-widget">
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Cuenta">
              <img src="/imagenes/user-svgrepo-com.svg" alt="Cuenta" />
            </a>
          </div>
          <div className="cart-widget">
            <Link to="/cart" aria-label="Carrito">
              <img src="/imagenes/shopping-cart-svgrepo-com.svg" alt="Carrito" />
              <span id="cart-count" aria-live="polite">{cartItemCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

