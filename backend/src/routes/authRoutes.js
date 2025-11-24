const express = require('express');
const router = express.Router();
const authController = require('../src/controllers/authController');

//endpoint de register
router.post('/register', authController.register);

module.exports = router;