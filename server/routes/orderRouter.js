const express = require('express');
const router = new express.Router;
const GetOrder = require('../controllers/orderController')

router.get('/', GetOrder)

module.exports = router;