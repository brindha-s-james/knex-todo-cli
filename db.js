const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

// Your DB functions go here

function close() {
  db.destroy()
}

function getTodoById(id) {
  return db('todos').where('id', id)
}

function delToDobyId(id) {
  return db('todos').where('id', id).del()
}

function clearTable(id) {
  for (let i = 0; i < id; i++) {
    delToDobyId(i)
  }
}

function addTodo(str) {
  return db('todos').insert({ task: str })
}

function updateTask(id, str) {
  return db('todos').where('id', id).update({ task: str })
}

function searchTodos(str) {
  return db('todos').whereLike('task', `%${str}%`)
}

module.exports = {
  getTodos,
  close,
  getTodoById,
  delToDobyId,
  addTodo,
  updateTask,
  searchTodos,
  clearTable,
}
