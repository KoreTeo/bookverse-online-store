const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  cart_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER,
  }
})

module.exports = Cart;