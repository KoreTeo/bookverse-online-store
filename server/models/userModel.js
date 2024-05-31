const Sequelize = require('sequelize');
const db = require('../db');
const bcrypt = require('bcrypt');
const Order = require('./orderModel')

const User = db.define('user', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  last_name: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  birthday: {
    type: Sequelize.DATE,
  },
  is_admin: {
    type: Sequelize.BOOLEAN,
  },
  first_name: {
    type: Sequelize.STRING,
  },
})

module.exports = User;