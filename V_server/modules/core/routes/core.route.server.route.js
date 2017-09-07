/**
 * Created by SHENJO on 8/25/2017.
 */

const coreCtrl = require('../controllers/core.route.server.controller');

module.exports = (app) => {
  app.route('/api/todos')
    .get(coreCtrl.list)
    .post(coreCtrl.save)

  app.route('/*')
    .get(coreCtrl.get)
};