/**
 * Created by SHENJO on 8/25/2017.
 */
// import utils from '';
const _ = require('lodash');

module.exports = (app) => {
  const entries = ['./modules/auth/routes/auth.route.server.route.js','./modules/core/routes/core.route.server.route.js'];
  _.each(entries, (entry) => {
    require(entry)(app);
  })
};
