import React from 'react';

function Navbar({ toggleSidebar, navigateTo, cartItemCount }) {
  const go = (view) => navigateTo && navigateTo(view);

  return (
    <header className="header">
      <div className="header__container">
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

        <nav className="nav__bar" aria-label="Navegación principal">
          <div className="logo__container">
            <a onClick={() => go('home')} style={{ cursor: 'pointer' }}>
              <img src="/imagenes/logo.svg" alt="Logo" className="logo-item" />
              <h1 className="nombre">Hermanos Jota</h1>
            </a>
          </div>

          <div className="nav__container">
            <ul className="nav__links">
              <li className="nav__items">
                <a onClick={() => go('products')} style={{ cursor: 'pointer' }}>Productos</a>
              </li>
              <li className="nav__items">
                <a onClick={() => go('contact')} style={{ cursor: 'pointer' }}>Contacto</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="funcionalidades__container">
          <div className="account-widget">
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Cuenta">
              <img src="/imagenes/user-svgrepo-com.svg" alt="Cuenta" />
            </a>
          </div>
          <div className="cart-widget">
            <a href="#" id="cart-btn" onClick={(e) => e.preventDefault()} aria-label="Carrito">
              <img src="/imagenes/shopping-cart-svgrepo-com.svg" alt="Carrito" />
              <span id="cart-count" aria-live="polite">{cartItemCount}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
