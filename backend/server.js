const express = require('express')
const cors = require('cors')

const productosRouter = require('./src/routes/productosRoutes')
const logger = require('./src/middlewares/logger');

const app = express()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(logger);

//Rutas
app.use('/api/productos', productosRouter)

//Error 404 temporal

app.use((req, res, next) => {
    res.status(404).json({error: 'Ruta no encontrada'});
});

//Error Handler temp

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: 'Error interno del servidor'});
});

//Levantar servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`App corriendo en http://localhost:${PORT}`)
})
