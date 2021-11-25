let express = require('express');
let { Router } = express;
let app = express();

const routerProductos = new Router;
const PORT = 8080;

let productos = [];

routerProductos.get('/', (req, res, next) => {
    res.send(productos);
});

routerProductos.get('/', (req, res, next) => {
    
});

routerProductos.post('/', (req, res, next) => {
    productos.push(req.query.addproduct);
    res.send(productos.indexOf, productos);
});


app.use('/productos', routerProductos);

app.get('/', (req, res, next) => {
    res.send('home');
});

app.listen(PORT, () => {
    console.log("Listening...")
});

