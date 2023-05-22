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
}
