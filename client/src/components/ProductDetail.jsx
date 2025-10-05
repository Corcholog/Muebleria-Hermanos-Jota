import React from "react";

function ProductDetail({ producto, volver, onAddToCart}) {
  if (!producto) {
    return (
      <main className="producto-detalle">
        <h1>Error</h1>
        <p className="error-message">Producto no encontrado.</p>
        <button onClick={volver}>← Volver al catálogo</button>
      </main>
    );
  }

  return (
    <main className="producto-detalle">
      {/* Botón para volver */}
      <button onClick={volver} className="btn-volver">← Volver al catálogo</button>

      {/* Título del producto */}
      <h1 id="product-title" className="section-title">{producto.nombre}</h1>

      {/* Contenedor principal */}
      <article id="product-details" className="detalle-container">
        <figure id="product-img">
          <img src={producto.imagen} alt={producto.nombre} />
          <p className="precio">${parseFloat(producto.precio).toLocaleString('es-AR')}</p>
        </figure>

        <section id="product-info">
          <h2>Detalles del producto</h2>
          {producto.detalles && Object.entries(producto.detalles).map(([key, value]) => (
            <div className="detail" key={key}>
              <span>{key}:</span> {value}
            </div>
          ))}

          <button className="btn-cart" onClick={() => onAddToCart(producto)}> Añadir al Carrito </button>
        </section>
      </article>
    </main>
  );
}

export default ProductDetail;
