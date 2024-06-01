const express = require('express');
const router = new express.Router();
const cartRouter = require('./cartRouter');
const orderRouter = require('./orderRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');

router.use('/cart', cartRouter)
router.use('/order', orderRouter)
router.use('/product', productRouter)
router.use('/user', userRouter)

module.exports = router;