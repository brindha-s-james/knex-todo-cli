const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

function getTaskById(id) {
  return db('todos').where('id', id)
}

function delTaskById(id) {
  return db('todos').where('id', id).del()
}


// Your DB functions go here

function close() {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  getTaskById,
  delTaskById
}

