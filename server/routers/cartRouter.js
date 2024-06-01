const express = require('express');
const router = new express.Router;
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, cartController.get)
router.post('/', authMiddleware, cartController.addToCart)

module.exports = router;