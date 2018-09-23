// Spinning express application and we can use all its utility methods 
const express = require('express');
const app = express();

/* Incoming request has to go through app.use('request')
 * Next is used to pass the request to the next handler in line 
 */
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works'
    }); 
});

module.exports = app;