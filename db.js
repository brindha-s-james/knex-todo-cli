const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todo')
  .select()
}

//5.show a task by Id========
function selectOneTaskbyIdDb(id){
  return db
  .select()
  .where ('id', id)
}

//6. delete task by user once its one. eg ./todo done 1=========
function deleteTaskByIdDb(id){
  return db 
  .select()
  .where ('id', id)
  .del()
}

//7. add a new task by entering a command such as ./todo add 'pet cat'

function addNewTaskDb(newTask){
  return db 
  .insert({task:newTask})//inserts the added task into the object column task.ie task:pet cat
  .into ('todo')
}

//8. Update a task by ID======
function updateTaskDb (id, task){
  return db 
  .update ({task:task})
  .where ('id', id)
}
//9.enable user to search for task containing a search term eg. ./todo search 'wire' =====

function searchTaskByWord (searchWord) {
  return db 
  .select()
  .whereLike('task', 
   '%{Job:searchWord}%')
}




//============================

function close() {
  db.destroy()
}

module.exports = {
  getTodos,
  selectOneTaskbyIdDb,
  deleteTaskByIdDb,
  addNewTaskDb,
  updateTaskDb, 
  searchTaskByWord,
  close,
}
