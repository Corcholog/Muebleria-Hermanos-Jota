// /backend/src/controllers/productosControllers.js
const mongoose = require('mongoose');
const repo = require('../persistencia/repositories/product.repository');

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// GET /api/productos -> todos
async function getAll(req, res, next) {
  try {
    const limit = Math.max(0, Number(req.query.limit) || 0); 
    const skip  = Math.max(0, Number(req.query.skip)  || 0); 
    const productos = await repo.findAll();
    return res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return next(error);
  }
}

// GET /api/productos/:id -> uno por _id
async function getById(req, res, next) {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ message: "El parámetro 'id' debe ser un ObjectId válido." });
    }
    const producto = await repo.findById(id);
    if (!producto) {
      return res.status(404).json({ message: 'El producto no existe, vuelve a intentarlo.' });
    }
    return res.status(200).json(producto);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    return next(error);
  }
}

// POST /api/productos -> crear
async function create(req, res, next) {
  try {
    const payload = { ...req.body };

    // Compat: imagen -> imagenUrl
    if (payload.imagen && !payload.imagenUrl) {
      payload.imagenUrl = payload.imagen;
      delete payload.imagen;
    }

    // Coerción numérica segura (por si vienen strings)
    if (payload.precio !== undefined) payload.precio = Number(payload.precio);
    if (payload.stock !== undefined && payload.stock !== '') payload.stock = Number(payload.stock);

    // Validaciones mínimas (el schema también valida)
    if (!payload.nombre || typeof payload.nombre !== 'string') {
      return res.status(400).json({ message: "El campo 'nombre' es requerido y debe ser un texto." });
    }
    if (payload.precio === undefined || Number.isNaN(payload.precio)) {
      return res.status(400).json({ message: "El campo 'precio' es requerido y debe ser un número." });
    }
    if (payload.precio < 0) {
      return res.status(400).json({ message: "El campo 'precio' no puede ser negativo." });
    }
    if (payload.stock !== undefined && (Number.isNaN(payload.stock) || payload.stock < 0)) {
      return res.status(400).json({ message: "El campo 'stock' debe ser un número mayor o igual a 0." });
    }

    const doc = {
      nombre: payload.nombre,
      descripcion: payload.descripcion ?? '',
      precio: payload.precio,
      stock: typeof payload.stock === 'number' && !Number.isNaN(payload.stock) ? payload.stock : 0,
      imagenUrl: payload.imagenUrl ?? '',
    };

    const creado = await repo.create(doc);
    return res.status(201).json(creado);
  } catch (error) {
    console.error('Error al crear producto:', error);
    return next(error);
  }
}

// PUT /api/productos/:id -> actualizar
async function update(req, res, next) {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ message: "El parámetro 'id' debe ser un ObjectId válido." });
    }

    const payload = { ...req.body };

    // Compat: imagen -> imagenUrl
    if (payload.imagen && !payload.imagenUrl) {
      payload.imagenUrl = payload.imagen;
      delete payload.imagen;
    }

    // Coerción numérica
    if (payload.precio !== undefined) payload.precio = Number(payload.precio);
    if (payload.stock !== undefined && payload.stock !== '') payload.stock = Number(payload.stock);

    // Limitar a campos del modelo
    const updates = {};
    if (payload.nombre !== undefined) updates.nombre = payload.nombre;
    if (payload.descripcion !== undefined) updates.descripcion = payload.descripcion;
    if (payload.precio !== undefined) {
      if (Number.isNaN(payload.precio) || payload.precio < 0) {
        return res.status(400).json({ message: "El campo 'precio' debe ser un número >= 0." });
      }
      updates.precio = payload.precio;
    }
    if (payload.stock !== undefined) {
      if (Number.isNaN(payload.stock) || payload.stock < 0) {
        return res.status(400).json({ message: "El campo 'stock' debe ser un número >= 0." });
      }
      updates.stock = payload.stock;
    }
    if (payload.imagenUrl !== undefined) updates.imagenUrl = payload.imagenUrl;

    const actualizado = await repo.update(id, updates);
    if (!actualizado) {
      return res.status(404).json({ message: 'El producto no existe, vuelve a intentarlo.' });
    }

    return res.status(200).json(actualizado);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    return next(error);
  }
}

// DELETE /api/productos/:id -> eliminar
async function remove(req, res, next) {
  try {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json({ message: "El parámetro 'id' debe ser un ObjectId válido." });
    }

    const eliminado = await repo.remove(id);
    if (!eliminado) {
      return res.status(404).json({ message: 'El producto no existe, vuelve a intentarlo.' });
    }

    return res.status(200).json({ message: 'Producto eliminado correctamente.' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    return next(error);
  }
}

module.exports = { getAll, getById, create, update, remove };