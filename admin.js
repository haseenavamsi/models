const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

router.get('/add-product',productControllers.getAddProduct);
router.post('/add-product',productControllers.postAddProduct);
module.exports = router;
