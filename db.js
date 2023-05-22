const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todo').select()
}

function close() {
  db.destroy()
}

// Your DB functions go here
function selectOne(id) {
  return db('todo').where('id', id).select()
}

function deleteTodo(id) {
  id = +id
  return db('todo')
    .select()
    .then((todos) => {
      // console.log(todos)
      // console.log(id)

      todos.forEach((todo) => {
        if (todo.id === id) {
          todo.del()
        }
      })
      console.log(todos)
      db.destroy()
    })
    .catch((err) => {
      console.log(err.message)
      db.destroy()
    })
}

module.exports = {
  getTodos,
  close,
  selectOne,
  deleteTodo,
}
