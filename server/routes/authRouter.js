const express = require('express');
const router = new express.Router;
const authController = require('../controllers/authController')

router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.post('/registration', authController.registration)

module.exports = router;