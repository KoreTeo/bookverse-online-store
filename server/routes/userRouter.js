const { UpdateProfile, GetProfileData } = require('../controllers/userController');
const express = require('express');
const router = new express.Router();
const passport = require('passport')

router.get('/', passport.authenticate("jwt", {session: false}), GetProfileData);

router.put('/', passport.authenticate("jwt", {session: false}), UpdateProfile);

module.exports = router;
