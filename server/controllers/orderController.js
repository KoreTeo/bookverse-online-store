const Order = require('../models/orderModel')

const GetOrder = (req, res) => {
  Order.findOne({ where: { order_id: 1 } })
    .then(order => {
      res.status(200).json(order);
    })
    .catch((err) => console.log(err))
}

module.exports = GetOrder