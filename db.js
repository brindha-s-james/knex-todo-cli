const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

//GET IDs from todos//

function getTaskById(id) {
  return db('todos').where('id', id)
}

function deleteTaskbyId(id) {
  return db('todos').where('id', id).del()
}

function insertNewTask(task) {
  return db('todos').insert({ owner: 'tayla', task: task, complete: false })
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
}
