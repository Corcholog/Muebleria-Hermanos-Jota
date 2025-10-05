import { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; 
import '../ProductStyles.css';

const API = "http://localhost:5000/api/productos";

function ProductList({ setSelectedProduct, limit, handleAddToCart }) {
  
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

  const productosAmostrar = limit ? productos.slice(0, limit) : productos;

  //Determina el ID y el título basado en 'limit'
  const isHighlighted = limit > 0;
  const cardButtonText = isHighlighted ? "Ver Detalles" : "Añadir al carrito"; 
  const cardButtonAction = isHighlighted ? setSelectedProduct : handleAddToCart; 
  const gridId = isHighlighted ? "productos-destacados-grid" : "card-container";
  const sectionClass = isHighlighted ? "destacados" : "catalogo";
  const titleText = isHighlighted ? "Nuestros Destacados" : "Catálogo de nuestros productos";

  return (
    <section className={sectionClass}>
      {isHighlighted ? (
        // ESTRUCTURA PARA NUESTROS DESTACADOS
        <div className="destacados__container">
          <h2 className="destacados__title section-title">{titleText}</h2>
          
          <div id={gridId} className="destacados__grid">              
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
             
            {!loading && !error && productosAmostrar.map(producto => (
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
        // ESTRUCTURA PARA EL CATÁLOGO COMPLETO
        <>
          <h1 className="section-title">{titleText}</h1>
          <section id={gridId}> {/* Usamos el ID del catálogo completo */}
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            
            {!loading && !error && productosAmostrar.map(producto => (
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