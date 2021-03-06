/**
 * Created by SHENJO on 9/5/2017.
 */
const authCtrl = require('../controllers/auth.route.server.controller');

module.exports = (app) => {
  app.route('/api/auth')
    .get(authCtrl.checkLogin)

  app.route('/api/auth/signin')
    .post(authCtrl.signin);

  app.route('/api/auth/logout')
    .get(authCtrl.logout);

  app.route('/api/auth/signup')
    .post(authCtrl.signup);
};