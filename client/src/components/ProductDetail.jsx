import React from "react";
import '../ProductStyles.css';

function ProductDetail({ producto, volver, onAddToCart }) {
  if (!producto) {
    return (
      <main className="producto-detalle">
        <h1>Error</h1>
        <p className="error-message">Producto no encontrado.</p>
        <button type="button" onClick={volver}>← Volver al catálogo</button>
      </main>
    );
  }

  const precio = Number(producto.precio);

  return (
    <main className="producto-detalle">
      <h1 id="product-title" className="section-title">{producto.nombre}</h1>

      <button type="button" onClick={volver} id="btn-back" className="volver-btn">
        ← Volver al catálogo
      </button>


      <article id="product-details" className="detalle-container">
        <figure id="product-img">
          <img src={producto.imagen} alt={producto.nombre} />
          <p className="precio">
            ${isNaN(precio) ? producto.precio : precio.toLocaleString('es-AR')}
          </p>
        </figure>

        <section id="product-info">
          <h2>Detalles del producto</h2>
          {producto.detalles && Object.entries(producto.detalles).map(([key, value]) => (
            <div className="detail" key={key}>
              <span>{key}:</span> {value}
            </div>
          ))}

          <button type="button" className="btn-cart" onClick={() => onAddToCart(producto)}>
            Añadir al Carrito
          </button>
        </section>
      </article>
    </main>
  );
}

export default ProductDetail;

