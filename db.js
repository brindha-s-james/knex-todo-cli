const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

// Your DB functions go here

function displayRows(idNum) {
  return db('todos').where('id', idNum ).select().first()
}


function close() {
  db.destroy()
}


module.exports = {
  getTodos,
  close,
  displayRows,
}
