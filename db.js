const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

function getTodoById(id) {
  return db('todos').select().where({ id })
}

function insertTodo(task) {
  return db('todos').insert({ task })
}

function deleteTodo(id) {
  return db('todos').del().where({ id })
}

function updateTodo(id, updatedTask) {
  return db('todos').update({ task: updatedTask }).where({ id })
}

function searchTask(search) {
  return db('todos').select().whereLike('task', `%${search}%`)
}

function updateComplete(id, name) {
  return db('todos').update({ completed: true, user: name }).where({ id })
}

function close() {
  db.destroy()
}

module.exports = {
  getTodos,
  getTodoById,
  insertTodo,
  deleteTodo,
  updateTodo,
  searchTask,
  updateComplete,
  close,
}
