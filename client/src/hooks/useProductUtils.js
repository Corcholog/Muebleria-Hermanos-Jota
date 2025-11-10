import { useMemo } from 'react';

/**
 * Custom hook con utilidades comunes para productos
 * Centraliza la lógica de formateo y transformaciones
 */
export const useProductUtils = () => {
  
  /**
   * Formatea un precio al formato argentino
   * @param {number|string} precio - Precio a formatear
   * @returns {string} Precio formateado
   */
  const formatPrice = (precio) => {
    const precioNum = Number(precio);
    if (isNaN(precioNum)) return precio;
    return precioNum.toLocaleString('es-AR');
  };

  /**
   * Formatea múltiples precios de un array de productos
   * @param {Array} productos - Array de productos
   * @returns {Array} Productos con precios formateados
   */
  const formatProductsPrices = (productos) => {
    return productos.map(producto => ({
      ...producto,
      precioFormateado: formatPrice(producto.precio)
    }));
  };

  /**
   * Valida si un precio es válido
   * @param {number|string} precio
   * @returns {boolean}
   */
  const isValidPrice = (precio) => {
    const precioNum = Number(precio);
    return !isNaN(precioNum) && precioNum >= 0;
  };

  /**
   * Filtra productos por rango de precio
   * @param {Array} productos
   * @param {number} min
   * @param {number} max
   * @returns {Array}
   */
  const filterByPriceRange = (productos, min = 0, max = Infinity) => {
    return productos.filter(producto => {
      const precio = Number(producto.precio);
      return precio >= min && precio <= max;
    });
  };

  /**
   * Ordena productos por precio
   * @param {Array} productos
   * @param {string} order - 'asc' o 'desc'
   * @returns {Array}
   */
  const sortByPrice = (productos, order = 'asc') => {
    return [...productos].sort((a, b) => {
      const precioA = Number(a.precio);
      const precioB = Number(b.precio);
      return order === 'asc' ? precioA - precioB : precioB - precioA;
    });
  };

  /**
   * Busca productos por nombre o descripción
   * @param {Array} productos
   * @param {string} searchTerm
   * @returns {Array}
   */
  const searchProducts = (productos, searchTerm) => {
    if (!searchTerm) return productos;
    
    const term = searchTerm.toLowerCase();
    return productos.filter(producto => 
      producto.nombre?.toLowerCase().includes(term) ||
      producto.descripcion?.toLowerCase().includes(term)
    );
  };

  return {
    formatPrice,
    formatProductsPrices,
    isValidPrice,
    filterByPriceRange,
    sortByPrice,
    searchProducts
  };
};

/**
 * Hook para formatear un precio individual (con memoización)
 * @param {number|string} precio
 */
export const useFormattedPrice = (precio) => {
  return useMemo(() => {
    const precioNum = Number(precio);
    if (isNaN(precioNum)) return precio;
    return precioNum.toLocaleString('es-AR');
  }, [precio]);
};