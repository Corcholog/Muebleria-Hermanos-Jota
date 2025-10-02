import React from 'react';

function ProductCard({ producto }) { 
  return (
    <article className="card">
      <a href={`/productos/${producto.id}`}>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt={producto.nombre} />
        <p className="precio">${producto.precio.toLocaleString('es-AR')}</p>
      </a>
      <button className="btn-detalle">Añadir al carrito</button>
    </article>
  );
}

export default ProductCard;