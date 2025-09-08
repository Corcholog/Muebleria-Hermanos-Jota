// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // AHORA USA FETCH PARA CARGAR EL JSON
    const obtenerProductos = async () => {
        const response = await fetch('data/productos.json');
        
        // Si la respuesta no es OK (ej: error 404), lanza un error
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    };

    const renderizarProductosIndex = (productos) => {
    const gridDestacados = document.getElementById('productos-destacados-grid');
    
    while (gridDestacados.firstChild) {
        gridDestacados.removeChild(gridDestacados.firstChild);
    }

    const productosParaMostrar = productos.slice(0, 5);

    productosParaMostrar.forEach(producto => {
        const card = document.createElement('article');
        const imagen = document.createElement('img');
        const contentDiv = document.createElement('div');
        const nombre = document.createElement('h2');
        const precio = document.createElement('p');
        const link = document.createElement('a');

        card.className = 'card';
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        nombre.textContent = producto.nombre;
        precio.className = 'precio';
        const precioCorregido = parseInt(String(producto.precio).replace('.', ''));
        precio.textContent = `$${precioCorregido.toLocaleString('es-AR')}`;

        link.className = 'btn-detalle';
        link.href = `productos/producto-detalle.html?id=${producto.id}`;
        link.textContent = 'Ver Detalles';

        contentDiv.appendChild(precio);
        contentDiv.appendChild(link);
        card.appendChild(nombre);
        card.appendChild(imagen);
        card.appendChild(contentDiv);
        
        gridDestacados.appendChild(card);
    });
};

    const main = async () => {
        const gridDestacados = document.getElementById('productos-destacados-grid');
        try {
            while (gridDestacados.firstChild) {
                gridDestacados.removeChild(gridDestacados.firstChild);
            }
            const loadingMessage = document.createElement('p');
            loadingMessage.className = 'loading-message';
            loadingMessage.textContent = 'Cargando nuestros mejores diseños...';
            gridDestacados.appendChild(loadingMessage);

            const productosObtenidos = await obtenerProductos();
            renderizarProductosIndex(productosObtenidos);

        } catch (error) {
            console.error('Error al cargar los productos:', error);
            while (gridDestacados.firstChild) {
                gridDestacados.removeChild(gridDestacados.firstChild);
            }
            const errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'No se pudieron cargar los productos. Intente más tarde.';
            gridDestacados.appendChild(errorMessage);
        }
    };

    main();
});