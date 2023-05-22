const { printTodos, logError } = require('./commands')

// THIS IS WHERE WE INTERACT WITH THE DATABASE (3)
const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

// Your DB functions go here

function close() {
  db.destroy()
}

//added for selectOneTodo // selects a row givin its ID
function getTodoById(id) {
  return db('todos').where('id', id)
}


// added to delete an entry based by its id
function DeleteTodoById (id) {
  return db('todos').where('id', id).del()
}

//add new task
function addNewTaskTodo(str) {
 return db('todos').insert({task: str})
}

module.exports = {
  getTodos,
  close,
  getTodoById,
  DeleteTodoById,
  addNewTaskTodo
}
