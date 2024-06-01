const express = require('express');
const router = new express.Router;
const productController = require('../controllers/productController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', productController.getAll)
router.get('/:id', productController.getOne)
router.post('/', checkRole('ADMIN'), productController.create)

module.exports = router;