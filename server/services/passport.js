const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJWT = passportJWT.ExtractJwt;
const StrategyJWT = passportJWT.Strategy;
const User = require('../models/userModel')

passport.use(
  new StrategyJWT({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  },
    function (JWTPayload , done) {
      return User.findOne({ where: { phone: JWTPayload.phone } })
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err)
        });
    }
  )
);

