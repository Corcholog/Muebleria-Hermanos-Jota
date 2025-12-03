const express = require('express');
const router = express.Router();
const authController = require('../src/controllers/authController');

//endpoint de register y login
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;