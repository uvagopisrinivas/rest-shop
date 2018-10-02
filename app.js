// Spinning express application and we can use all its utility methods 
const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev')); // logs the data 

const productRoutes =  require('./api/routes/products.js');
const orderRoutes = require('./api/routes/orders.js');
app.use('/products', productRoutes); // If URL has products then it is handled by productsRoutes 
app.use('/orders', orderRoutes);
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;