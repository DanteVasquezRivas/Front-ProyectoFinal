const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');

// productos
router.get('/productos', productController.getAllProducts);
router.get('/productos/:id', productController.getProductById);
router.post('/productos', productController.createProduct);

// pedidos
router.get('/pedidos', orderController.getAllOrders);

module.exports = router;
