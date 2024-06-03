const express = require('express');
const router = new express.Router;
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, orderController.getAll)
router.get('/:id', authMiddleware, orderController.getOne)
router.post('/', authMiddleware, orderController.create)
router.put('/:id', authMiddleware, orderController.update)

module.exports = router;