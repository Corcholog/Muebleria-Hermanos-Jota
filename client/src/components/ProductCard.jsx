import React from 'react';

function ProductCard({ producto, onSelect, buttonText, buttonAction }) {
  const precio = Number(producto.precio);

  return (
    <article className="card" onClick={onSelect} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect?.()}>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
      <p className="precio">
        ${isNaN(precio) ? producto.precio : precio.toLocaleString('es-AR')}
      </p>

      <button
        type="button"
        className="btn-detalle"
        onClick={(e) => {
          e.stopPropagation();
          buttonAction?.(producto);
        }}
      >
        {buttonText}
      </button>
    </article>
  );
}

export default ProductCard;
