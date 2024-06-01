const {Cart, Cart_Details} = require('../models/models');
const ApiError = require('../error/ApiError')

class CartController {
  async get(req, res) {
    const {user} = req.body
    const cart = await Cart.findOne({where:{userId: user.id}});
    const cart_details = await Cart_Details.findAll({where:{cartId: cart.id}})
    res.json(cart_details)
  }
  async addToCart(req, res) {
    const {user, productId} = req.body
    const cart = await Cart.findOne({where:{userId: user.id}});
    const cart_details = await Cart_Details.create(
      {
        cartId: cart.id,
        productId: productId
      })
    res.json(cart_details)
  }
}

module.exports = new CartController();