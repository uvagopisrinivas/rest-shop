// Spinning express application and we can use all its utility methods 
const express = require('express');
const app = express();
const productRoutes =  require('./api/routes/products.js');
const orderRoutes = require('./api/routes/orders.js');
app.use('/products', productRoutes); // If URL has products then it is handled by productsRoutes 
app.use('/orders', orderRoutes);

/* Incoming request has to go through app.use('request')
 * Next is used to pass the request to the next handler in line 
 */
// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works'
//     }); 
// });

// ^ sample code just to explain how the request is handled by use command 

module.exports = app;