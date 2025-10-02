import React from 'react';

function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h2 className="hero__title">DISEÑO QUE PERDURA, HISTORIAS QUE COMIENZAN</h2>
          <p className="hero__text">
            Redescubre el arte de crear muebles que alimentan el alma. Cada pieza combina herencia y diseño, honrando el pasado mientras abraza tu futuro.
          </p>
          <a href="/productos" className="hero__cta">Explorar Colección</a>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;