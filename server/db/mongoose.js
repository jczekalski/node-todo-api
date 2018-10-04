const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://jncz:todoapp123@ds223253.mlab.com:23253/todo-app-api'
};
mongoose.connect(process.env.PORT ? db.localhost : db.mlab);

module.exports = {
  mongoose
};