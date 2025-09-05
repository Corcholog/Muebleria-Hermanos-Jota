const productos = [
    {id:1, nombre: "Aparador Uspallata", img: "imagenes/Aparador_Uspallata.png", precio: "$120.000"},
    {id:2, nombre: "Biblioteca Recoleta", img: "imagenes/Biblioteca_Recoleta.png", precio: "$120.000"},
    {id:3, nombre: "Butaca Mendoza", img: "imagenes/Butaca_Mendoza.png", precio: "$120.000"},
    {id:4, nombre: "Escritorio Costa", img: "imagenes/Escritorio_Costa.png", precio: "$120.000"},
    {id:5, nombre: "Mesa Comedor Pampa", img: "imagenes/Mesa_Comedor_Pampa.png", precio: "$120.000"},
    {id:6, nombre: "Mesa de Centro Araucaria", img: "imagenes/Mesa_de_Centro_Araucaria.png", precio: "$120.000"},
    {id:7, nombre: "Mesa de Noche Aconcagua", img: "imagenes/Mesa_de_Noche_Aconcagua.png", precio: "$120.000"},
    {id:8, nombre: "Silla de Trabajo Belgrano", img: "imagenes/Silla_de_Trabajo_Belgrano.png", precio: "$120.000"},
    {id:9, nombre: "Sillas Córdoba", img: "imagenes/Sillas_Córdoba.png", precio: "$120.000"},
    {id:10, nombre: "Sillón Copacabana", img: "imagenes/Sillón_Copacabana.png", precio: "$120.000"},
    {id:11, nombre: "Sofá Patagonia", img: "imagenes/Sofá_Patagonia.png", precio: "$120.000"},
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
