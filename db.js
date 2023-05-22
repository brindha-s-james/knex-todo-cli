const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

// Your DB functions go here

function showTaskById(id){
 return db('todos').where('id', id)
}

function deleteTaskById(id){
 return db('todos').where('id', id).del()
}

function close() {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  showTaskById,
  deleteTaskById
}
