const { Sequelize } = require('sequelize');
module.exports = new Sequelize('Bookverse', 'postgres', '1234567890', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
  define: {
    timestamps: false
  }
});

