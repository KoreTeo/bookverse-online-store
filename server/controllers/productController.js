const uuid = require('uuid');
const path = require('path');
const { Op } = require("sequelize");
const { Product } = require('../models/models');
const ApiError = require('../error/ApiError');


class ProductController {
  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } })
    res.json(product)
  }
  async getAll(req, res) {
    let { name, category, genre, genres, min_price, max_price, author, page, limit } = req.body
    let offset = (page * limit - limit);
    let products;

    let whereClause = {
      [Op.and]: [],
    };

    if (category) {
      whereClause[Op.and].push({ category: category });
    }

    if (name) {
      whereClause[Op.and].push({ name:  {[Op.iLike]: '%'+name+'%'} });
    }

    if(genres){
      if (genres.length !== 0) {
        whereClause[Op.and].push({ genre: { [Op.in]: genres } });
      }
    }

    if(genre){
      whereClause[Op.and].push({ genre: genre });
    }

    if (author) {
      whereClause[Op.and].push({ author: {[Op.iLike]: '%'+author+'%'} });
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
  async getCategory(req, res, next) {
    try {
      let { category } = req.body
      const products = await Product.findAll({
        where: {
          category: category
        },
      })
      return res.json(products)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

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
  async updateOne(req, res, next) {
    try {
      const { id, name, description, category, price, quantity_in_stock, genre, author, discontinued } = req.body
      const product = await Product.findOne({ where: { id } })
      product.set({
        name, description, category, price, quantity_in_stock, genre, author, discontinued
      })
      await product.save()
      return res.json(product)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
  async deleteOne(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ where: { id } })
      product.destroy();
      return res.json({ message: `Продукт ${id} удален` })
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new ProductController();