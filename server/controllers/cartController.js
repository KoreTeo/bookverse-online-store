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
    const {user, productId, quantity} = req.body
    const cart = await Cart.findOne({where:{userId: user.id}});
    const cart_details = await Cart_Details.create(
      {
        cartId: cart.id,
        productId: productId,
        quantity: quantity
      })
    res.json(cart_details)
  }
  async deleteFromCart(req, res) {
    const {user, productId} = req.body
    const cart = await Cart.findOne({where:{userId: user.id}});
    const cart_details = await Cart_Details.findOne({where:{cartId: cart.id, productId}})
    cart_details.destroy();
    res.json(cart_details);
  }
  async changeQuantity(req, res) {
    const {user, productId, quantity} = req.body
    const cart = await Cart.findOne({where:{userId: user.id}});
    const cart_details = await Cart_Details.findOne({where:{cartId: cart.id, productId}})
    await cart_details.set({
      quantity: quantity,
    })
    await cart_details.save();
    res.json(cart_details);
  }
}

module.exports = new CartController();