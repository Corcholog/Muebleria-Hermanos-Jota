// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // Simulación de carga de datos
    const obtenerProductos = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos); 
            }, 1500);
        });
    };

    const renderizarProductosIndex = (productos) => {
        const gridDestacados = document.getElementById('productos-destacados-grid');
        
        // se vacía el contenedor antes de renderizar para evitar posibles errores
        while (gridDestacados.firstChild) {
            gridDestacados.removeChild(gridDestacados.firstChild);
        }

        const productosParaMostrar = productos.slice(0, 5);

        // Se crean los elementos de la card uno por uno
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
            //imagen.className = 'card__imagen';
            
            //nombre.className = 'card__nombre';
            nombre.textContent = producto.nombre;
            
            precio.className = 'precio';
            precio.textContent = `$${producto.precio.toLocaleString('es-AR')}`;
            
            link.className = 'btn-detalle';
            link.href = `producto.html?id=${producto.id}`;
            link.textContent = 'Ver Detalles';

            // construye la estructura jerarquicamente
            contentDiv.appendChild(precio);
            contentDiv.appendChild(link);

            card.appendChild(nombre);
            card.appendChild(imagen);
            card.appendChild(contentDiv);
            
            
            
            gridDestacados.appendChild(card);
        });
    };

    // --- FUNCIÓN PRINCIPAL ASÍNCRONA PARA EJECUTAR TODO ---
    const main = async () => {
        const gridDestacados = document.getElementById('productos-destacados-grid');
        try {
            // Vaciamos el contenedor y mostramos el mensaje de carga
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
            // Vaciamos el contenedor y mostramos el mensaje de error
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