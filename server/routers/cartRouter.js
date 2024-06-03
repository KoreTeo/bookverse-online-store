const express = require('express');
const router = new express.Router;
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, cartController.get)
router.post('/', authMiddleware, cartController.addToCart)
router.post('/delete', authMiddleware, cartController.deleteFromCart)
router.post('/changeQuantity', authMiddleware, cartController.changeQuantity)

module.exports = router;