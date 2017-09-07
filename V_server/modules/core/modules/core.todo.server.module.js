/**
 * Created by SHENJO on 8/28/2017.
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: String
});

mongoose.model('todo', TodoSchema);

