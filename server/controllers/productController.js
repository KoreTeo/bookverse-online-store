const uuid = require('uuid');
const path = require('path');
const { Op } = require("sequelize");
const { Product } = require('../models/models');
const ApiError = require('../error/ApiError');


class ProductController {
  async getOne(req, res) {
    const {id} = req.params;
    const product = await Product.findOne({where: {id}})
    res.json(product)
  }
  async getAll(req, res) {
    let { category, genres, min_price, max_price, author, limit, page } = req.body
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit
    let products;

    let whereClause = {
      [Op.and]: [],
    };

    if (category) {
      whereClause[Op.and].push({ category: category });
    }

    if (genres) {
      whereClause[Op.and].push({ genre: { $in: genres } });
    }

    if (author) {
      whereClause[Op.and].push({ author: author });
    }

    if (min_price && max_price) {
      whereClause[Op.and].push({ price: { [Op.between]: [min_price, max_price] } });
    }

    products = await Product.findAndCountAll({
      where: whereClause,
      limit: limit,
      offset: offset,
    })

    return res.json(products)
  }
  async create(req, res, next) {
    try {
      const { name, description, category, price, quantity_in_stock, genre, author, discontinued } = req.body
      const { img } = req.files;
      let filename = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', filename))
      const product = await Product.create({ name, description, category, price, quantity_in_stock, genre, author, img_link: filename, discontinued })
      return res.json(product)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new ProductController();