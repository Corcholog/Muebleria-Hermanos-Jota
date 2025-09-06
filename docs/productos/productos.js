// Variable global para almacenar todos los productos
let productosGlobales = [];

function limpiarContenedor() {
    const contenedor = document.getElementById("card-container");
    if (!contenedor) return;
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function cargarCatalogo(productos) {
    const contenedor = document.getElementById("card-container");
    if (!contenedor) return;

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
