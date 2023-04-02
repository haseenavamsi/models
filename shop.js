const path=require('path');

const express = require('express');

// const router = express.Router();

const productController = require('../controllers/products');

const router = express.Router();

router.get('/', productController.getProducts);
// router.post('/add-product', productController.postAllProducts);
// router.get('/products', productController.getProducts);

module.exports = router;
