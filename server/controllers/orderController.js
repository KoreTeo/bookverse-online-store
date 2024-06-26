const { Product, Cart, Cart_Details, Order, Order_Details } = require('../models/models');
const ApiError = require('../error/ApiError');
const sequelize = require('../')
const { Op } = require('sequelize')

class OrderController {
  async create(req, res, next) {
    const { ship_to, status, user } = req.body;
    const cart = await Cart.findOne({ where: { userId: user.id } });
    const cart_details = await Cart_Details.findAll({ where: { cartId: cart.id } })
    if (!cart_details) {
      return next(ApiError.internal('Корзина пуста'))
    }
    let total = 0;
    const order = await Order.create({ ship_to, status, userId: user.id })
    cart_details.forEach(async i => {
      let product = await Product.findOne({ where: { id: i.productId } })
      let order_details = await Order_Details.create({
        orderId: order.id,
        productId: i.productId,
        quantity: i.quantity,
        price: product.price,
      })
      total += parseInt(product.price) * parseInt(i.quantity);
      order.total = total;
      await order.save()
    })
    if (order.status === 'В обработке') {
      console.log('first flag!!!')
      setTimeout(async function () {
        if(order.status === 'В обработке'){
          console.log('second flag!!!')
          order.set({
            status: 'Отменен',
          })
          await order.save()
        }
      }, 300000, order.id)}
    return res.json(order)
  }
  async getAdmin(req, res) {
    let { number, min_cost, max_cost, status } = req.body
    let orders;

    let whereClause = {
      [Op.and]: [],
    };

    if (number) {
      whereClause[Op.and].push({ id: number });
    }

    if (status) {
      whereClause[Op.and].push({ status: status });
    }

    if (min_cost && max_cost) {
      whereClause[Op.and].push({ total: { [Op.between]: [min_cost, max_cost] } });
    }
    orders = await Order.findAll({
      where: whereClause,
      order: [
        ['order_date', 'DESC'],
      ],
    });
    return res.json(orders)
  }
  async getAll(req, res) {
    const { user } = req.body;
    const orders = await Order.findAll({
      where: { userId: user.id },
      include: [{ model: Order_Details, as: 'order_details' }],
      order: [
        ['order_date', 'DESC'],
      ],
    });
    return res.json(orders)
  }
  async getOne(req, res) {
    const { id } = req.params;
    const order = await Order.findOne(
      {
        where: { id: id },
        include: [{ model: Order_Details, as: 'order_details' }]
      }
    );

    return res.json(order)
  }
  async update(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    const order = await Order.findOne({
      where: { id },
    });
    order.set({
      status: status,
    })
    await order.save()
    if (status === 'Отправлен') {
      setTimeout(async function () {
        const order = await Order.findOne({
          where: { id },
        });
        order.set({
          status: 'Доставлен',
        })
        await order.save()
        setTimeout(async function () {
          const order = await Order.findOne({
            where: { id },
          });
          order.set({
            status: 'Получен',
          })
          await order.save()
        }, 60000, id)
      }, 60000, id)
      return res.json(order)
    }
  }
}

module.exports = new OrderController();