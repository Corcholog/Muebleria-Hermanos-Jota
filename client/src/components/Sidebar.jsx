import React from 'react';

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar__container ${isOpen ? 'menu--toggle' : ''}`} id="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__links">
          <li className="sidebar__items">
            <a className="search" href="#">
              <img src="/imagenes/search-svgrepo-com.svg" alt="Buscar" />
              <p>Buscar</p>
            </a>
          </li>
          <li className="sidebar__items">
            <a href="/">
              <img src="/imagenes/home-svgrepo-com (1).svg" alt="Página de Inicio" />
              <p>Página de Inicio</p>
            </a>
          </li>
          <li className="sidebar__items">
            <a href="/productos">
              <img src="/imagenes/ad-product-svgrepo-com.svg" alt="Productos" />
              <p>Productos</p>
            </a>
          </li>
          <li className="sidebar__items">
            <a href="/contacto">
              <img src="/imagenes/contact-dm-email-svgrepo-com.svg" alt="Contacto" />
              <p>Contacto</p>
            </a>
          </li>
          <li className="sidebar__items">
            <a href="#">
              <img src="/imagenes/user-svgrepo-com.svg" alt="Usuario" />
              <p>Usuario</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;