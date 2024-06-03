const express = require('express');
const router = new express.Router;
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.get('/', authMiddleware, orderController.getAll)
router.post('/getadmin', checkRoleMiddleware('ADMIN'), orderController.getAdmin)
router.get('/:id', authMiddleware, orderController.getOne)
router.post('/', authMiddleware, orderController.create)
router.put('/:id', checkRoleMiddleware('ADMIN'), orderController.update)

module.exports = router;