const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require("dotenv").config();

class AuthController {
  async registration(req, res) {
    const { first_name, phone, email, password, birthday, is_admin, last_name } = req.body;

    const alreadyExistsPhone = await User.findOne({ where: { phone } }).catch((err) => console.log('Error: ', err))
    const alreadyExistsEmail = await User.findOne({ where: { email } }).catch((err) => console.log('Error: ', err))

    if (alreadyExistsPhone) {
      return res.json({ message: "Пользователь с таким номером уже существует" })
    }

    if (alreadyExistsEmail) {
      return res.json({ message: "Пользователь с такой почтой уже существует" })
    }

    const newUser = new User({ first_name, phone, email, password, birthday, is_admin, last_name });
    await newUser.save()
      .catch((err) => {
        console.log('Error: ', err)
        res.json({ error: 'Не удалось зарегистрировать пользователя. Попробуйте позже.' })
      });
  }
  async login(req, res) {
    const { phone, password } = req.body;

    const userWithPhone = await User.findOne({ where: { phone } }).catch((err) => {
      console.log('Error: ', err);
    });

    if (!userWithPhone) {
      return res.json({ error: 'Данный телефон не зарегистрирован' })
    }

    if (userWithPhone.password !== password) {
      return res.json({ error: 'Пароль введен неверно' })
    }

    const jwtToken = jwt.sign({ id: userWithPhone.id, phone: userWithPhone.phone }, `${process.env.JWT_SECRET}`);

    res.json({ message: 'Login Successfully!', token: jwtToken })

  }
  async getUsers(req, res) {
    try {
      res.json("it works")
    }
    catch (e) {

    }
  }
}

module.exports = new AuthController();