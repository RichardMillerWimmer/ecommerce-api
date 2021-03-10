const express = require('express');

const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

const app = express();

const port = 5051;

app.use(express.json());


app.get('/api/products', getProducts);


app.get('/api/products/:id', getProduct);












app.listen(port, () => console.log('server is running on 5051'));