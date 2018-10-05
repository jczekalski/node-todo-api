const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Production db
mongoose.connect('mongodb://localhost:27017/TodoApp')

//Deployment db
// mongoose.connect('mongodb://jncz:todoapp123@ds223253.mlab.com:23253/todo-app-api');

module.exports = {
  mongoose
};