const productos = require('../data/productos.json');

// función que trae todos los elementos del array
const getAll = (req, res) => {
    try {
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// función que trae un producto específico
const getById = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: "El parámetro 'id' debe ser un número válido." });
    }

    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({ message: "El producto no existe, vuelve a intentarlo." });
    }

    res.status(200).json(producto);
};

// función de creación de un nuevo producto
const create = (req, res) => {
    try {
        const { nombre, imagen, precio, detalles } = req.body;

        // Validaciones básicas
        if (!nombre || typeof nombre !== 'string') {
            return res.status(400).json({ message: "El campo 'nombre' es requerido y debe ser un texto." });
        }
        if (precio === undefined || typeof precio !== 'number' || isNaN(precio)) {
            return res.status(400).json({ message: "El campo 'precio' es requerido y debe ser un número." });
        }

        // Se crea un id único
        const id = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1;

        // Se crea el nuevo producto
        const nuevo = { id, nombre, imagen: imagen || '', precio, detalles: detalles || {} };
        productos.push(nuevo);

        res.status(201).json(nuevo);
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// función para actualizar algún dato del producto
const update = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: "El parámetro 'id' debe ser un número válido." });
    }

    const { nombre, imagen, precio, detalles } = req.body;
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({ message: "El producto no existe, vuelve a intentarlo." });
    }

    try {
        // Sobrescribimos los existentes por los nuevos
        if (nombre !== undefined) producto.nombre = nombre;
        if (imagen !== undefined) producto.imagen = imagen;
        if (precio !== undefined) producto.precio = precio;

        if (detalles !== undefined) {
            if (typeof detalles !== 'object' || Array.isArray(detalles)) {
                return res.status(400).json({ message: "El campo 'detalles' debe ser un objeto válido." });
            }

            const clavesInvalidas = [];

            // Actualizamos solo las claves existentes
            for (let key in detalles) {
                if (producto.detalles && producto.detalles.hasOwnProperty(key)) {
                    producto.detalles[key] = detalles[key];
                } else {
                    clavesInvalidas.push(key);
                }
            }

            if (clavesInvalidas.length > 0) {
                return res.status(400).json({
                    message: `Los siguientes campos de 'detalles' no existen: ${clavesInvalidas.join(', ')}`
                });
            }
        }

        res.status(200).json(producto);
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// función de eliminar un producto por id
const remove = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: "El parámetro 'id' debe ser un número válido." });
    }

    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "El producto no existe, vuelve a intentarlo." });
    }

    try {
        productos.splice(index, 1);
        res.status(200).json({ message: "Producto eliminado correctamente." });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// exportación de los controladores
module.exports = { getAll, getById, create, update, remove };
