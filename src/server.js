import express from 'express'
import routerProducts from './routes/routesProd.js'
import routerCart from './routes/routesCart.js'
import config from './config.js'

const app=express()

app.use(express.static('public'))
app.use('/api/productos',routerProducts)
app.use('/api/carrito',routerCart)

// app.get('/', (req, res) => {
//     res.render('pages/index');
// });

const PORT = config.port
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))