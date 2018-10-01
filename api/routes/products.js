const express = require('express');
/* 
* Router is a subPackage that Express package ships with
* Handle different routes reaching diffrent endpoints
*/
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Products GET response'
    }); 
}); // For any routes starts with products  

router.post('/',(req, res, next)=>{
    res.status(201).json({
        message: 'Products POST response'
    });
});

// This is the Products get request for a specific product using product ID 
router.get('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discoved the specialId'
        });
    } else {
        res.status(200).json({
            message: 'You passed Id'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message : 'Updated product'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.json({
        message : 'Deleted Product'
    });
});

module.exports = router;