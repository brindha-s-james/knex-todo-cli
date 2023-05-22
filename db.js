const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

function getTaskById(id) {
  return db('todos').where('id', id)
}

function getTaskByOwner(input) {
  return db('todos').where('owner', input)
}

function deleteTaskbyId(id) {
  return db('todos').where('id', id).del()
}

function insertNewTask(owner, task) {
  return db('todos').insert({ owner: owner, task: task, complete: false })
}

function editTask(id, edit) {
  return db('todos').where('id', id).update({ task: edit })
}

function searchTask(input) {
  return db('todos').whereLike('task', `%${input}%`)
}

function completeTask(input) {
  return db('todos').where('id', input).update({ complete: true })
}
// Your DB functions go here

function close() {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  getTaskById,
  deleteTaskbyId,
  insertNewTask,
  editTask,
  searchTask,
  completeTask,
  getTaskByOwner,
}
