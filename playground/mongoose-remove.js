const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Remove all

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Remove one

Todo.findByIdAndRemove('5bb720fef604787cdd4af06f').then((todo) => {
  console.log(todo);
});