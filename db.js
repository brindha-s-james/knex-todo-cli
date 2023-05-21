const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

// Your DB functions go here

function showTask(id){
  // db.from('todos')
  // db.select('id'==id)
 return db('todos').where('id', id)
  
}

function close() {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  showTask
}
