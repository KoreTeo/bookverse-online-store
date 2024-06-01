const express = require('express');
const router = new express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware')

router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/data', authMiddleware, userController.sendUserData)
router.put('/edit', authMiddleware, userController.updateUserData)

module.exports = router;