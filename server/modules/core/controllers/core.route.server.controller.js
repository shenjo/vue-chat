/**
 * Created by SHENJO on 8/25/2017.
 */
const mongoose = require('mongoose'),
  co = require('co'),
  _ = require('lodash'),
  Todo = mongoose.model('todo');

exports.get = (req, res) => {
  res.json({ test: 'hi.' });
};


exports.list = (req, res) => {
  co(function*() {
    let todos = yield Todo.find({}).lean();
    res.json(todos);
  }).catch(err => {
    res.status(400).send({ message: err.message });
  });
};

exports.save = (req, res) => {
  co(function*() {
    let todoObj = req.body || {};
    if (_.isEmpty(todoObj)) {
      throw new Error('please give a todo');
    }
    let todo = new Todo(todoObj).save();
    res.json(todo);
  }).catch(err => {
    res.status(400).send({ message: err.message });
  });
};