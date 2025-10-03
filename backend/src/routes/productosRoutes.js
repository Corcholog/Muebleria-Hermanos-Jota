const express = require('express'); 
const router = express.Router()

// importación de los controladores
const controladores = require('../controllers/productosControllers') 

router.get('/', controladores.getAll) 
router.get('/:id', controladores.getById) 
router.post('/', controladores.create)
router.put('/:id', controladores.update)
router.delete('/:id', controladores.remove)

module.exports = router;