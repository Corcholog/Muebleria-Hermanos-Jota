const express = require('express')
const cors = require('cors')

const productosRouter = require('./routes/productosRoutes')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/productosRoutes', productosRouter)

//Levantar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log('app corriendo')
})
