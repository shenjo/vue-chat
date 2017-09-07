/**
 * Created by SHENJO on 8/28/2017.
 */

const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://shenjo-9-w7/vuejs_org');
mongoose.connection.on('error', function(err) {
  console.log(err);
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
});
require('./modules/core/modules/core.todo.server.module');
require('./modules/core/modules/core.user.server.module');

exports.db = db;