const express = require('express');
const router = new express.Router;
const productController = require('../controllers/productController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', productController.getAll)
router.get('/:id', productController.getOne)
router.post('/category', productController.getCategory)
router.post('/update/:id', checkRole('ADMIN'), productController.updateOne)
router.delete('/:id', checkRole('ADMIN'), productController.deleteOne)
router.post('/create', checkRole('ADMIN'), productController.create)

module.exports = router;