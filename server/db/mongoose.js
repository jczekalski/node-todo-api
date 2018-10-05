const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {
  local: 'mongodb://localhost:27017/TodoApp',
  mongo: 'mongodb://jncz:todoapp123@ds223253.mlab.com:23253/todo-app-api'
}

mongoose.connect(db.mongo || db.local);

module.exports = {
  mongoose
};