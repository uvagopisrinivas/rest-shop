const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order GET response'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Order POST response'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Specific Order details',
        ordreId: req.params.ordreId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted order sucessfully',
        orderId: req.params.orderId
     }) 
});

module.exports = router;