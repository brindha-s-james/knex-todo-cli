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

function addRow(newTask) {
  return db('todos').insert(newTask)
}

function updateRow(idNum, updatedTask){
  return db("todos").where('id', idNum).update("name", updatedTask)
}

function close() {
  db.destroy()
}


module.exports = {
  getTodos,
  close,
  displayRow,
  deleteRow,
  addRow, 
  updateRow,
}
