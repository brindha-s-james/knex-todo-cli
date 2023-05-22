const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todo').select()
}

// Your DB functions go here

function showTaskById(id) {
  return db('todo').where('id', id)
}

function deleteTaskById(id) {
  return db('todo').where('id', id).del()
}

function addTasktoTodo(newTask) {
  return db('todo').insert({ task: newTask, completed: false })
}

function updateTaskById(id, input) {
  return db('todo').where('id', id).update({ task: input })
}

function completeTaskById(id) {
  return db('todo').where('id', id).update({ completed: true })
}

function searchByWord(searchWord) {
  return db('todo').whereLike('task', `%${searchWord}%`)
}

function sortByIncomplete() {
  return db('todo').where('completed', false)
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
  searchByWord,
  completeTaskById,
  sortByIncomplete,
}
