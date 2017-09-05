/**
 * Created by SHENJO on 9/5/2017.
 */
const mongoose = require('mongoose'),
  User = mongoose.model('User'),
  co = require('co'),
  passport = require('passport');

exports.signin = function(req, res) {
  passport.authenticate('local', function(err, user, info) {
    if (err || !user) {
      res.status(400).send(info);
    } else {
      req.login(user, function(err) {
        if (err) {
          res.status(400).send({ message: err.message })
        } else {
          res.json(user);
        }
      })
    }
  })(req, res);

};

exports.signup = function(req, res) {
  co(function* () {
    let params = req.body || {};
    let user = yield new User(params).save();
    res.json(user);
  }).catch(err => {
    res.status(400).send({ message: err.message })
  })
};