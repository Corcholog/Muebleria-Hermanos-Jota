import React from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard'; 

function ProductList() {
  
   const [productos, setProductos] = useState([]);
   const [loading, setLoading] = useState(true);

   // fetch a API /api/productos

  return (
    <section className="destacados">
      <div className="destacados__container">
        <h2 className="destacados__title">Nuestros Destacados</h2>
        <div id="productos-destacados-grid" className="destacados__grid">
          {loading ? <p>Cargando...</p> : productos.map(producto => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;