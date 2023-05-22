const { printTodos, logError } = require('./commands')

// THIS IS WHERE WE INTERACT WITH THE DATABASE (3)
//database queries on this page
const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

// Your DB functions go here

function close() {
  db.destroy()
}

//added for selectOneTodo // selects a row givin its ID
function getTodoById(id) {
  return db('todos').where('id', id)
}

// added to delete an entry based by its id
function DeleteTodoById(id) {
  return db('todos').where('id', id).del()
}

//add new task
function addNewTaskTodo(str) {
  return db('todos').insert({ task: str })
}

//update taskby id
function updateTask(id, str) {
  return db('todos').where('id', id).update({ task: str })
}

//search for a task
// used a filtering condition that match rows where the value in the 'task' colunm
//    The % wildcard characters before and after the word variable mean that the word
//     can appear anywhere within the task column value.
function searchTaskByWord(word) {
  return db('todos').where('task', `%${word}%`)
}
module.exports = {
  getTodos,
  close,
  getTodoById,
  DeleteTodoById,
  addNewTaskTodo,
  updateTask,
  searchTaskByWord,
}
