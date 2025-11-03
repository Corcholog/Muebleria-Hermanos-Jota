require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { connect } = require('./src/persistencia/mongo');
const productosRouter = require('./src/routes/productosRoutes');
const logger = require('./src/middlewares/logger');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// Ruta de prueba (health)
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Servidor funcionando correctamente.' });
});

// Rutas principales
app.use('/api/productos', productosRouter);

// Error 404 (ruta no encontrada)
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Ruta no encontrada.',
    path: req.originalUrl,
    metodo: req.method
  });
});

// Manejador de errores generales
app.use((err, req, res, next) => {
  console.error('Error general:', err.stack || err);
  res.status(500).json({ message: 'Error interno del servidor.' });
});

// Levantar servidor SOLO después de conectar a Mongo
const PORT = process.env.PORT || 5000;

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('No se pudo conectar a MongoDB:', err);
    process.exit(1);
  });