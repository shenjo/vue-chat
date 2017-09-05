/**
 * Created by SHENJO on 9/5/2017.
 */
const mongoose = require('mongoose'),
  passport = require('passport'),
  User = mongoose.model('User');
module.exports = function(app) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

// Deserialize sessions
  passport.deserializeUser(function(id, done) {
    User.findOne({
      _id: id
    }, function(err, user) {
      done(err, user);
    });
  });
  require('./strategies/local')();

  app.use(passport.initialize());
  app.use(passport.session());
};
