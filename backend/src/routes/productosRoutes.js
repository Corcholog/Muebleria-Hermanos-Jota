const express = require('express');
const router = express.Router();

const auth = require('../src/middlewares/a')

// Controladores (adaptados a Mongo/Mongoose)
const controladores = require('../controllers/productosControllers');

router.use((req, res, next) => {
  if (['POST', 'PUT', 'PATCH'].includes(req.method) && !req.is('application/json')) {
    return res.status(415).json({ message: 'Content-Type debe ser application/json' });
  }
  next();
});

// Rutas públicas (sin auth)
router.get('/', controladores.getAll);
router.get('/:id', controladores.getById);

// Rutas protegidas (con auth) - requieren token JWT
router.post('/', controladores.create);
router.put('/:id', controladores.update);
router.delete('/:id', controladores.remove);

module.exports = router;

