const { UpdateProfile, GetProfileData } = require('../controllers/userController');
const express = require('express');
const router = new express.Router();

router.get('/', GetProfileData);

router.put('/', UpdateProfile);

module.exports = router;
