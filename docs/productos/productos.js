// Variable global para almacenar todos los productos
let productosGlobales = [];

function limpiarContenedor() {
    const contenedor = document.getElementById("card-container");
    if (!contenedor) return;
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1500);
    });
};


async function cargarCatalogo(productos) {


    const contenedor = document.getElementById("card-container");
    if (!contenedor) return;


    const gridDestacados = document.getElementById('card-container');
        try {
            // Vaciamos el contenedor y mostramos el mensaje de carga
            
            const loadingMessage = document.createElement('p');
            loadingMessage.className = 'loading-message';
            loadingMessage.textContent = 'Cargando catálogo de productos...';
            gridDestacados.appendChild(loadingMessage);

            const productosObtenidos = await obtenerProductos();
            limpiarContenedor();
            productos.forEach(producto => {
                // Creo un article para la tarjetta
                const tarjerta = document.createElement("article");
                tarjerta.classList.add("card");

                const h2 = document.createElement("h2");
                h2.textContent = producto.nombre;

                const img = document.createElement("img");
                img.src = producto.imagen; 
                img.alt = producto.nombre;

                const link = document.createElement("a");
                link.href = `productos/producto-detalle.html?id=${producto.id}`;

                const precio = document.createElement("p");
                precio.textContent = `$${producto.precio}`;
                precio.classList.add("precio");

                link.append(h2, img, precio);
                tarjerta.appendChild(link);

                const btn = document.createElement("button");
                btn.textContent = "Añadir al carrito";
                btn.classList.add("btn-detalle");
                //btn.addEventListener("click", () => agregarAlCarrito(p));
                tarjerta.appendChild(btn);

                contenedor.appendChild(tarjerta);
            });

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


}

// -------------------------
// Fetch de productos desde JSON
// -------------------------
fetch("../data/productos.json")
    .then(res => res.json())
    .then(productos => {
        productosGlobales = productos;

        cargarCatalogo(productosGlobales);
        //actualizarCarrito();
    })
    .catch(error => console.error("Error al cargar productos:", error));
