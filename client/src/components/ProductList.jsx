import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import '../ProductStyles.css';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const API = `${API_BASE}/api/productos`;

function ProductList({ setSelectedProduct, limit, handleAddToCart }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API, { signal: ctrl.signal });

        if (!res.ok) {
          throw new Error(`Error al cargar los productos (HTTP ${res.status})`);
        }

        const data = await res.json();
        setProductos(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Error al cargar los productos');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    return () => ctrl.abort();
  }, []);

  const productosAmostrar = typeof limit === 'number' && limit > 0 ? productos.slice(0, limit) : productos;

  const isHighlighted = typeof limit === 'number' && limit > 0;
  const cardButtonText = isHighlighted ? 'Ver Detalles' : 'Añadir al carrito';
  const cardButtonAction = isHighlighted ? setSelectedProduct : handleAddToCart;
  const gridId = isHighlighted ? 'productos-destacados-grid' : 'card-container';
  const sectionClass = isHighlighted ? 'destacados' : 'catalogo';
  const titleText = isHighlighted ? 'Nuestros Destacados' : 'Catálogo de nuestros productos';

  return (
    <section className={sectionClass} aria-busy={loading}>
      {isHighlighted ? (
        <div className="destacados__container">
          <h2 className="destacados__title section-title">{titleText}</h2>

          <div id={gridId} className="destacados__grid">
            {loading && <p>Cargando...</p>}
            {error && <p role="alert">{error}</p>}

            {!loading && !error && productosAmostrar.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onSelect={() => setSelectedProduct(producto)}
                buttonText={cardButtonText}
                buttonAction={cardButtonAction}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <h1 className="section-title">{titleText}</h1>
          <section id={gridId}>
            {loading && <p>Cargando...</p>}
            {error && <p role="alert">{error}</p>}

            {!loading && !error && productosAmostrar.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                onSelect={() => setSelectedProduct(producto)}
                buttonText={cardButtonText}
                buttonAction={cardButtonAction}
              />
            ))}
          </section>
        </>
      )}
    </section>
  );
}

export default ProductList;
