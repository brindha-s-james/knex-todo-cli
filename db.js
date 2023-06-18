const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todo')
    .select()
}

//5.show a task by Id========
function selectOneTodobyIdDb(id){
  return db('todo')
    .select()
    .where ({id:id})
}

//6. delete task by user once its one. eg ./todo done 1=========
function deleteTodoByIdDb(id){
  return db ('todo')
    .where ({id:id})
    .del()
}

//7. add a new task by entering a command such as ./todo add 'pet cat'

function addNewTaskDb(newTask){
  return db ('todo')
    .insert({task:newTask})//inserts the added task into the object column task.ie task:pet cat
}

//8. Update a task by ID======
function updateTaskDb (id, updatedTask){
  return db ('todo')
    .update ({task:updatedTask})
    .where ({id:id})
}
//9.enable user to search for task containing a search term eg. ./todo search 'wire'==

function searchTaskByWordDb (searchWord) {
  return db('todo') 
    .select()
    .whereLike('task', 
    `%{searchWord}%`)
}

//10. Enable users to mark a task complete, without deleting it from the database

 function taskCompeleteDb(id){
  return db('todo')
    .where({id:id})
    .update({completed: true})
 }
//

function close() {
  db.destroy()
}

module.exports = {
  getTodos,
  selectOneTodobyIdDb,
  deleteTodoByIdDb,
  addNewTaskDb,
  updateTaskDb, 
  searchTaskByWordDb,
  taskCompeleteDb,
  close,
}
