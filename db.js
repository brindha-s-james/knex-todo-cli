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

module.exports = {
  getTodos,
  close,
  getTodoById,
  delToDobyId,
}
