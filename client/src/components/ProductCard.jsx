import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ producto, buttonText, buttonAction, useNavigation = false }) {
  const navigate = useNavigate();
  const precio = Number(producto.precio);

   const handleCardClick = () => {
    if (useNavigation) {
      navigate(`/products/${producto.id}`);
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    
    if (useNavigation) {
      navigate(`/products/${producto.id}`);
    } else {
      buttonAction?.(producto);
    }
  };

  return (
    <article className="card" onClick={handleCardClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
      <p className="precio">
        ${isNaN(precio) ? producto.precio : precio.toLocaleString('es-AR')}
      </p>

      <button
        type="button"
        className="btn-detalle"
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>
    </article>
  );
}

export default ProductCard;
