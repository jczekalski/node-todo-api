const env = process.env.NODE_ENV || 'development';

const db = {
  dev: 'mongodb://localhost:27017/TodoApp',
  test: 'mongodb://localhost:27017/TodoAppTest',
  mlab: 'mongodb://jncz:todoapp123@ds223253.mlab.com:23253/todo-app-api'
};

if (process.env.PORT) {
  process.env.MONGODB_URI = db.mlab;
} else {
  process.env.PORT = 3000;
  if (env === 'development') {
    process.env.MONGODB_URI = db.dev;
  } else if (env === 'test') {
    process.env.MONGODB_URI = db.test;
  }
}