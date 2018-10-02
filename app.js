// Spinning express application and we can use all its utility methods 
const express = require('express');
const app = express();
const productRoutes =  require('./api/routes/products.js');
const orderRoutes = require('./api/routes/orders.js');
app.use('/products', productRoutes); // If URL has products then it is handled by productsRoutes 
app.use('/orders', orderRoutes);

module.exports = app;