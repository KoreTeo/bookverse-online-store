const express = require('express');
const router = new express.Router;
const GetCart = require('../controllers/cartController')

router.get('/', GetCart)

module.exports = router;