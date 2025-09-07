document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productoId = parseInt(params.get("id"));

    fetch("data/productos.json") 
        .then(res => res.json())
        .then(productos => {
            const producto = productos.find(p => p.id === productoId);
            if (producto) {
                mostrarDetalles(producto);
            } else {
                document.getElementById("product-details").innerHTML =
                    `<p class="error-message">Producto no encontrado.</p>`;
                document.getElementById("product-title").textContent = "Error";
            }
        })
        .catch(error => {
            console.error("Error al cargar los detalles del producto:", error);
            document.getElementById("product-details").innerHTML =
                `<p class="error-message">No se pudieron cargar los detalles. Intente más tarde.</p>`;
        });
});

function mostrarDetalles(producto) {
    const titleContainer = document.getElementById("product-title");
    const detailsContainer = document.getElementById("product-details");
    detailsContainer.innerHTML = "";
    titleContainer.textContent = producto.nombre;

    const img = document.createElement("img");
    const nombre = producto.nombre;
    img.alt = nombre;
    img.src = `${producto.imagen}`;

    const figure = document.createElement("figure");
    figure.id = "product-img";
    figure.appendChild(img);

    const precioElement = document.createElement("p");
    precioElement.className = "precio";

    const precioNumerico = parseFloat(String(producto.precio).replace('.', ''));
    precioElement.textContent = `$${precioNumerico.toLocaleString('es-AR')}`;
    figure.appendChild(precioElement);

    const sectionInfo = document.createElement("section");
    sectionInfo.id = "product-info";
    const h2 = document.createElement("h2");
    h2.textContent = "Detalles del producto";
    sectionInfo.appendChild(h2);

    if (producto.detalles) {
        for (const atributo in producto.detalles) {
            const detalleDiv = document.createElement("div");
            detalleDiv.className = "detail";

            const span = document.createElement("span");
            span.textContent = `${atributo}:`;

            detalleDiv.appendChild(span);
            detalleDiv.append(` ${producto.detalles[atributo]}`);
            sectionInfo.appendChild(detalleDiv);
        }
    }

    const btnCart = document.createElement("button");
    btnCart.className = "btn-cart";
    btnCart.textContent = "Añadir al Carrito";
    sectionInfo.appendChild(btnCart);

    // Lógica para el botón de añadir al carrito
    btnCart.addEventListener("click", () => {
        // Llama a la función global del archivo carrito.js
        window.addToCart();
    });


    detailsContainer.appendChild(figure);
    detailsContainer.appendChild(sectionInfo);
}