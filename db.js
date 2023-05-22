const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

// Your DB functions go here

function displayRow(idNum) {
  return db('todos').where('id', idNum ).select().first()
}

function deleteRow(idNum) {
  return db('todos').where('id', idNum ).del()
}


function close() {
  db.destroy()
}


module.exports = {
  getTodos,
  close,
  displayRow,
  deleteRow,
}
