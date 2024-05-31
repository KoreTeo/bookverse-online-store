const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
require("dotenv").config();

class AuthController {
  verification(request) {
    return jwt.verify(request.headers.authorization.substring(7), process.env.JWT_SECRET).phone
  }
  async registration(req, res) {
    try {
      const { first_name, phone, email, password, birthday, is_admin, last_name } = req.body;

      const alreadyExistsPhone = await User.findOne({ where: { phone } }).catch((err) => console.log('Error: ', err))
      const alreadyExistsEmail = await User.findOne({ where: { email } }).catch((err) => console.log('Error: ', err))

      if (alreadyExistsPhone) {
        return res.json({ message: "Пользователь с таким номером уже существует" })
      }

      if (alreadyExistsEmail) {
        return res.json({ message: "Пользователь с такой почтой уже существует" })
      }

      const hashPassword = await bcrypt.hash(password, 3)

      const newUser = new User({ first_name, phone, email, password: hashPassword, birthday, is_admin, last_name });
      await newUser.save()
        .catch((err) => {
          console.log('Error: ', err)
          res.json({ error: 'Не удалось зарегистрировать пользователя. Попробуйте позже.' })
        });
    }
    catch (e) {
      console.log(e)
    }
  }
  async login(req, res) {
    try {
      const { phone, password } = req.body;

      const userWithPhone = await User.findOne({ where: { phone } }).catch((err) => {
        console.log('Error: ', err);
      });

      if (!userWithPhone) {
        return res.json({ error: 'Данный телефон не зарегистрирован' })
      }

      if (!(await bcrypt.compare(password, userWithPhone.password))) {
        return res.json({ error: 'Пароль введен неверно' })
      }

      const jwtToken = jwt.sign({ id: userWithPhone.id, phone: userWithPhone.phone },
        `${process.env.JWT_SECRET}`);

      res.json({ message: 'Вход выполнен!', token: jwtToken })

    }
    catch (e) {

    }
  }

  async logout(req, res, next) {
    try {

    }
    catch (e) {

    }
  }
}

module.exports = new AuthController();