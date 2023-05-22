const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

function getTodo(id){
  return db('todos')
  .select()
  .where('id', id)
}

function delTodo(id) {
  return db('todos')
  .where('id', id)
  .del()
}

// Your DB functions go here

function close() {
  db.destroy()
}



module.exports = {
  getTodos,
  close,
  getTodo,
  delTodo
}
