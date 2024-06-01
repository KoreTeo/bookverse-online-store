const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Cart, Cart_Details } = require('../models/models')

const generateJwt = (id, phone, role) => {
  return jwt.sign(
    { id, phone, role },
    process.env.JWT_SECRET,
    { expiresIn: '3d' }
  )
}

class UserController {
  async signup(req, res, next) {
    const { email, first_name, last_name, phone, birthday, password, role } = req.body
    if (!phone || !password) {
      return next(ApiError.badRequest('Некорректный ввод номера или пароля!'))
    }
    const candidate = await User.findOne({ where: { phone } })
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким номером уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({ email, first_name, last_name, phone, birthday, phone, role, password: hashPassword })
    const cart = await Cart.create({ userId: user.id })
    const token = generateJwt(user.id, user.phone, user.role)
    return res.json({message:"Успешная регистрация"})
  }
  async login(req, res, next) {
    const { phone, password } = req.body
    const user = await User.findOne({ where: { phone } })
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }
    const token = generateJwt(user.id, user.phone, user.role)
    return res.json({ token })
  }
  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.phone, req.user.role)
    return res.json({ token })
  }
  async sendUserData(req, res, next) {
    const { user } = req.body;
    const userInstance = await User.findOne({ where: { phone: user.phone } })
    return res.json({
      email: userInstance.email,
      first_name: userInstance.first_name,
      last_name: userInstance.last_name,
      phone: userInstance.phone
    })
  }
  async updateUserData(req, res, next) {
    const { email, first_name, last_name, phone, newpassword } = req.body
    const { user } = req.body;
    const userInstance = await User.findOne({ where: { phone: user.phone } });
    if(!newpassword) {
      await userInstance.set({
        email,
        first_name,
        last_name,
        phone
      });
      await userInstance.save()
      return res.status(200).json({message: "Информация обновлена"})
    }
    const hashPassword = await bcrypt.hash(newpassword, 5);
    await userInstance.set({
      email,
      first_name,
      last_name,
      phone,
      password: hashPassword,
    });
    await userInstance.save()
    return res.status(200).json({message: "Информация обновлена"})
  }
}

module.exports = new UserController();