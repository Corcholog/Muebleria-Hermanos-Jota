import { useState, useEffect } from 'react';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

/**
 * Custom hook para manejar el fetch de productos
 * Centraliza la lógica de carga, error y abort controller
 */
export const useProducts = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_BASE}/api/productos`, { 
          signal: ctrl.signal 
        });
        
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

  return { productos, loading, error };
};

/**
 * Custom hook para manejar el fetch de un producto individual
 * @param {string} id - ID del producto
 */
export const useProduct = (id) => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

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

  return { producto, loading, error };
};