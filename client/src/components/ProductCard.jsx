import React from 'react';

function ProductCard({ producto, onSelect }) { 
  return (
    <article className="card" onClick={onSelect}>
      
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p className="precio">${producto.precio.toLocaleString('es-AR')}</p>

      <button className="btn-detalle">Añadir al carrito</button>
    </article>
  );
}

export default ProductCard;