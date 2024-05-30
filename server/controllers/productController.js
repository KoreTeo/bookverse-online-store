const Product = require('../models/productModel')

const GetProduct = (req, res) => {
  Product.findOne({ where: { id: 1 } })
    .then(product => {
      res.status(200).json(product);
    })
    .catch((err) => console.log(err))
}

module.exports = GetProduct