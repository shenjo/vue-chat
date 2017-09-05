/**
 * Created by SHENJO on 9/5/2017.
 */
const passport = require('passport'),
  User = require('mongoose').model('User'),
  LocalStrategy = require('passport-local').Strategy;


module.exports = function() {
  passport.use(new LocalStrategy({
      usernameField: 'username', passwordField: 'password'
    },
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'user not exist.' })
        }
        if (user && user.password !== password) {
          return done(null, false, { message: 'wrong password' })
        }
        return done(user);
      })
    }
  ));
};