const User = require('../models/userModel');
const authController = require('./authController');
const bcrypt = require('bcrypt');

const GetProfileData = (req, res) => {
  User.findOne({ where: { phone: authController.verification(req) } })
    .then(user => {
      res.status(200).json({
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email,
        "phone": user.phone,
      });
    })
    .catch(err => console.log(err));
}

const UpdateProfile = async (req, res) => {
  const { first_name, last_name, email, phone, newpassword, birthday} = req.body;

  console.log(newpassword)

  const hashPassword = await bcrypt.hash(newpassword, 3);

  User.update(
    { first_name, last_name, email, phone, password: hashPassword, birthday},
    { where: { phone: authController.verification(req) } }
  )
    .then(() => res.status(200).json({ message: 'User updated successfully' }))
    .catch(err => console.log(err));
}

module.exports = { UpdateProfile, GetProfileData }