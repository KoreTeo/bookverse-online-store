const { DataTypes, Sequelize } = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  phone: {
    type: DataTypes.STRING,
    unique: true,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "USER",
    allowNull: false,
  },
})

const Cart = db.define('cart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
})

const Cart_Details = db.define('cart_details', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
})

const Order = db.define('order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  ship_to: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.DOUBLE,
  }
})

const Order_Details = db.define('order_details', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.DOUBLE,
  }
})

const Product = db.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  quantity_in_stock: {
    type: DataTypes.INTEGER,
  },
  genre: {
    type: DataTypes.STRING,
  },
  img_link: {
    type: DataTypes.STRING,
  },
  discontinued: {
    type: DataTypes.BOOLEAN,
  }
})

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.hasMany(Cart_Details, {as: 'cart_details'});
Cart_Details.belongsTo(Cart);

Product.hasOne(Cart_Details);
Cart_Details.belongsTo(Product);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(Order_Details, {as: 'order_details'});
Order_Details.belongsTo(Order);

Product.hasOne(Order_Details);
Order_Details.belongsTo(Product); 

module.exports = {
  User, Cart, Order, Order_Details, Cart_Details, Product
}