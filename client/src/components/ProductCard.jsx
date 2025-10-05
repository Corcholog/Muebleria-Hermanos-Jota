import React from 'react';

function ProductCard({ producto, onSelect, buttonText, buttonAction }) { 
  return (
    <article className="card" onClick={onSelect}>
      
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p className="precio">${producto.precio.toLocaleString('es-AR')}</p>

      <button className="btn-detalle"
        onClick={(e) => {
          e.stopPropagation(); // Previene que el clic suba a la tarjeta (onSelect)
          buttonAction(producto); // Ejecuta la acción específica
        }}
      >
        {buttonText} 
      </button>    
    </article>
  );
}

export default ProductCard;