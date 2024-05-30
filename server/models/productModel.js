const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DOUBLE,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
  genre: {
    type: Sequelize.STRING,
  },
  discount: {
    type: Sequelize.INTEGER,
  },
  discontinued: {
    type: Sequelize.BOOLEAN,
  }
})

module.exports = Product;