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

function addTasktoTodo(newTask){
 return db('todos').insert({ task: newTask })
}

function updateTaskById(id, input){
  return db('todos').where('id', id).update({task: input})
}

function searchByWord(searchWord){
  return db('todos').whereLike('task', `%${searchWord}%`)
}

function close() {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  showTaskById,
  deleteTaskById,
  addTasktoTodo,
  updateTaskById,
  searchByWord
}
