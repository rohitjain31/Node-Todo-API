var Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', (req, res) => {
    // seed Database
    var starterTodos = [
      {
        username: 'test',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Feed dog',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Learn Node',
        isDone: false,
        hasAttachment: false
      }
    ];
    Todos.create(starterTodos, (err, results) => {
      res.send(results)
    });
  });
}
