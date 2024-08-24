const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');

// Productos
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', authenticateToken, productController.createProduct);

// Pedidos
router.get('/pedidos', authenticateToken, orderController.getAllOrders);

// Usuarios
router.post('/auth/login', userController.loginUser);
router.post('/auth/register', userController.createUser);

module.exports = router;
