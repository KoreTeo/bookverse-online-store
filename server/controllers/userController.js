const User = require('../models/userModel');

const GetProfileData = (req, res) => {
  User.findOne({ where: { user_id: 1 } })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => console.log(err));
}

const UpdateProfile = (req, res) => {
  const { user_id, first_name, last_name, email, phone, password, birthday, isAdmin } = req.body;
  User.update(
    { first_name, last_name, email, phone, password, birthday, isAdmin },
    { where: { user_id: 1 } }
  )
    .then(() => res.status(200).json({ message: 'User updated successfully' }))
    .catch(err => console.log(err));
}

module.exports = { UpdateProfile, GetProfileData }