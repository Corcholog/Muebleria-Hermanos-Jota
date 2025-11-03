// /backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();

// Controladores (adaptados a Mongo/Mongoose)
const controladores = require('../controllers/productosControllers');

// Rutas principales (CRUD)
router.get('/', controladores.getAll);
router.get('/:id', controladores.getById);
router.post('/', controladores.create);
router.put('/:id', controladores.update);
router.delete('/:id', controladores.remove);

module.exports = router;

