const express = require('express')
const cors = require('cors')

const productosRouter = require('./src/routes/productosRoutes')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/productos', productosRouter)

//Levantar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`app corriendo en http://localhost:${PORT}`)
})
