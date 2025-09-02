const productos = [
    {id:1, nombre: "Aparador Uspallata", img: "kit-img/Aparador Uspallata.png", precio: "$120.000"},
    {id:2, nombre: "Biblioteca Recoleta", img: "kit-img/Biblioteca Recoleta.png", precio: "$120.000"},
    {id:3, nombre: "Butaca Mendoza", img: "kit-img/Butaca Mendoza.png", precio: "$120.000"},
    {id:4, nombre: "Escritorio Costa", img: "kit-img/Escritorio Costa.png", precio: "$120.000"},
    {id:5, nombre: "Mesa Comedor Pampa", img: "kit-img/Mesa Comedor Pampa.png", precio: "$120.000"},
    {id:6, nombre: "Mesa de Centro Araucaria", img: "kit-img/Mesa de Centro Araucaria.png", precio: "$120.000"},
    {id:7, nombre: "Mesa de Noche Aconcagua", img: "kit-img/Mesa de Noche Aconcagua.png", precio: "$120.000"},
    {id:8, nombre: "Silla de Trabajo Belgrano", img: "kit-img/Silla de Trabajo Belgrano.png", precio: "$120.000"},
    {id:9, nombre: "Sillas Córdoba", img: "kit-img/Sillas Córdoba.png", precio: "$120.000"},
    {id:10, nombre: "Sillón Copacabana", img: "kit-img/Sillón Copacabana.png", precio: "$120.000"},
    {id:11, nombre: "Sofá Patagonia", img: "kit-img/Sofá Patagonia.png", precio: "$120.000"},
];


// Selecciono el contenedor con querySelector
const contenedor = document.querySelector("#card-container");

productos.forEach(producto => {
    // Creo un article para la tarjetta
    const tarjerta = document.createElement("article");
    tarjerta.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = producto.nombre;

    const img = document.createElement("img");
    img.src = producto.img;
    img.alt = producto.nombre;

    const p = document.createElement("p");
    p.textContent = producto.precio
    p.classList.add("precio");

    const a = document.createElement("a");
    a.href = `producto.html#{producto.id}`;
    a.classList.add("btn-detalle");
    a.textContent = "Saber más";

    tarjerta.append(h2, img, p, a);
    
    contenedor.appendChild(tarjerta);
});
