const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  order_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  order_date: {
    type: Sequelize.DATE,
  },
  ship_to: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.DOUBLE,
  },
  total: {
    type: Sequelize.DOUBLE,
  }
})

module.exports = Order;