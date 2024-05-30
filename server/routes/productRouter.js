const express = require('express');
const router = new express.Router;
const GetProduct = require('../controllers/productController')

router.get('/', GetProduct)

module.exports = router;