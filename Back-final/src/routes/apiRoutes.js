const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/authMiddleware');

// Productos
router.get('/productos', productController.getAllProducts);
router.get('/productos/:id', productController.getProductById);
router.post('/productos', authenticateToken, productController.createProduct);

// Pedidos
router.get('/pedidos', authenticateToken, orderController.getAllOrders);

// Usuarios
router.post('/usuarios', userController.createUser);
router.post('/login', userController.loginUser);

module.exports = router;
