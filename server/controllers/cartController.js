const Cart = require('../models/cartModel')

const GetCart = (req, res) => {
  Cart.findOne({ where: { cart_id: 1 } })
    .then(cart => {
      res.status(200).json(cart);
    })
    .catch((err) => console.log(err))
}

module.exports = GetCart;