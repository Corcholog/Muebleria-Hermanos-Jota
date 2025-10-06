const express = require('express');
const router = express.Router();

// importación de los controladores
const controladores = require('../controllers/productosControllers');

// Rutas principales
router.get('/', controladores.getAll);
router.get('/:id', controladores.getById);

// Rutas de creación, actualización y eliminación
router.post('/', controladores.create);
router.put('/:id', controladores.update);
router.delete('/:id', controladores.remove);

// Manejador de rutas no válidas dentro de /api/productos
router.all('*', (req, res) => {
    res.status(405).json({ message: 'Método no permitido en esta ruta.' });
});

module.exports = router;
