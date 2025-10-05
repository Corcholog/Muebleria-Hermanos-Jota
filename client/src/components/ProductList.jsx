import { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; 

const API = "http://localhost:5000/api/productos";

function ProductList({ setSelectedProduct }) {
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch a API /api/productos
  const fetchProducts = async () => {
    try {
      const res = await fetch(API);

      if(!res.ok) {
        throw new Error("Error al cargar los productos")
      }

      const data = await res.json();
      setProductos(data)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  
  return (
    <section className="destacados">
      <div className="destacados__container">
        <h2 className="destacados__title">Nuestros Destacados</h2>
        <div id="productos-destacados-grid" className="destacados__grid">
          
          {loading && <p>Cargando...</p>}
          {error && <p>{error}</p>}
          
          {!loading && !error && productos.map(producto => (
            <ProductCard key={producto.id} producto={producto} onSelect={() => setSelectedProduct(producto)}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;