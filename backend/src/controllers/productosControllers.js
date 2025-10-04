const productos = require('../data/productos.json')

//función que trae todos los elementos del array
const getAll = (req, res) => {
    res.json(productos)
}

//función que trae un producto específico
const getById = (req, res) => {
    const id = Number(req.params.id)

    const producto = productos.find(p => p.id === id)

    if(!producto){
        return res.status(404).json({message: "El producto no existe, vuelve a intentarlo."})
    }

    res.json(producto)
}

//función de creación de un nuevo producto
const create = (req, res) => {
    const { nombre, imagen, precio, detalles } = req.body;

    // se crea un id único
    const id = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1

    //se crea el nuevo producto
    const nuevo = { id, nombre, imagen, precio, detalles }
    productos.push(nuevo);

    res.status(201).json(nuevo)
}

//función para actualizar algun dato del producto
const update = (req, res) => {
    const id = Number(req.params.id)
    const { nombre, imagen, precio, detalles } = req.body;
    const producto = productos.find(p => p.id === id)

    if(!producto){
        return res.status(404).json({message: "El producto no existe, vuelve a intentarlo."})
    }

    // sobreescribimos los existentes por los nuevos
    if(nombre){
        producto.nombre = nombre;
    }
    if(imagen){
        producto.imagen = imagen;
    }
    if(precio){
        producto.precio = precio;
    }
    if(detalles){
        const clavesInvalidas = [];
        
        // Actualizamos solo las claves de detalles que estén presentes
        for (let key in detalles) {
            if (producto.detalles.hasOwnProperty(key)) {
                producto.detalles[key] = detalles[key];
            }else{
                clavesInvalidas.push(key);
            }
        }

        if (clavesInvalidas.length > 0) {
            return res.status(400).json({message: `Los siguientes campos de 'detalles' no existen: ${clavesInvalidas.join(', ')}`});
        }
    }

    // devolvemos el producto actualizado
    res.json(producto) 
}

//función de eliminar un producto por id
const remove = (req, res) => {
    const id = Number(req.params.id)
    const index = productos.findIndex(p => p.id === id)

    if(index === -1) {
        return res.status(404).json({message: "El producto no existe, vuelve a intentarlo."})
    }

    productos.splice(index, 1)
    res.json({message: "Producto eliminado correctamente"})
}

// exportación de los controladores
module.exports = { getAll, getById, create, update, remove }