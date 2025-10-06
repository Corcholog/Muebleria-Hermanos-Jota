import React from 'react';

function HeroBanner({ navigateTo }) {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h2 className="hero__title">DISEÑO QUE PERDURA, HISTORIAS QUE COMIENZAN</h2>
          <p className="hero__text">
            Redescubrí el arte de crear muebles que alimentan el alma. Cada pieza combina herencia y diseño.
          </p>
          <button
            type="button"
            className="hero__cta"
            onClick={() => navigateTo && navigateTo('products')}
          >
            Explorar Colección
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;