/**
 * Created by SHENJO on 9/5/2017.
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String
});

mongoose.model('User', UserSchema);