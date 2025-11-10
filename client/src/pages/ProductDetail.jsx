import React, { useEffect, useState } from "react";
import '../ProductStyles.css';
import { useNavigate, useParams } from "react-router-dom";

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';


function ProductDetail({ onAddToCart }) {

  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();

    const fetchProducto = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_BASE}/api/productos/${id}`, { 
          signal: ctrl.signal 
        });
        
        if (!res.ok) {
          throw new Error(`Error al cargar el producto (HTTP ${res.status})`);
        }

        const data = await res.json();
        setProducto(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Error al cargar el producto');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
    return () => ctrl.abort();
  }, [id]);

  const volver = () => {
    navigate('/products'); 
  };

  if (loading) {
    return (
      <main className="producto-detalle">
        <p>Cargando producto...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="producto-detalle">
        <h1>Error</h1>
        <p className="error-message" role="alert">{error}</p>
        <button type="button" onClick={volver} className="btn-detalle">← Volver al catálogo</button>
      </main>
    );
  }

  if (!producto) {
    return (
      <main className="producto-detalle">
        <h1>Error</h1>
        <p className="error-message">Producto no encontrado.</p>
        <button type="button" onClick={volver} className="btn-detalle">← Volver al catálogo</button>
      </main>
    );
  }

  const precio = Number(producto.precio);

  return (
    <main className="producto-detalle">
      <h1 id="product-title" className="section-title">{producto.nombre}</h1>

      <button type="button" onClick={volver} id="btn-back" className="btn-detalle">
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

