const {Product, Cart, Cart_Details, Order, Order_Details} = require('../models/models');
const ApiError = require('../error/ApiError');
const sequelize = require('../')

class OrderController {
  async create(req, res, next) {
    const {ship_to, status, total, user} = req.body;
    const cart = await Cart.findOne({where:{userId: user.id}});
    const cart_details = await Cart_Details.findAll({where:{cartId: cart.id}})
    if (!!cart_details) {
      return next(ApiError.internal('Корзина пуста'))
    }
    const order = await Order.create({ship_to, status, total, userId: user.id})
    cart_details.forEach(async i => {
      let product = await Product.findOne({where:{id: i.productId}})
      let order_details = await Order_Details.create({
        orderId: order.id,
        productId: i.productId,
        quantity: i.quantity,
        price: product.price,
      })
      i.destroy();
    })
   
    return res.json(order)
  }
  async getAll(req, res) {
    const {user} = req.body;
    const orders = await Order.findAll({where: {userId: user.id}});
    return res.json(orders)
  }
  async getOne(req, res) {
    const {id} = req.params;
    const order = await Order.findAll(
      {
        where: {id}, 
        include: [{model: Order_Details, as: 'order_details'}]
      }
    );
    return res.json(order)
  }
}

module.exports = new OrderController();