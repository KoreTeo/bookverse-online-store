const express = require('express');
const router = new express.Router;
const authController = require('../controllers/authController')

router.post('/login', authController.login)
router.post('/registration', authController.registration)
router.get('/users', authController.getUsers)

module.exports = router;