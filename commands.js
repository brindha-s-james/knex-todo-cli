const db = require('./db')

function list() {
  return db
    .getTodos()
    .then((todos) => {
      printTodos(todos)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}
//5.show a task by Id=========
function selectOneTodo (id){
   return db
    .selectOneTodobyIdDb(id)
    .then((todos) => {
      printTodos(todos)
    })
    .catch((err) => {
      logError('select one task by id:' + err)
    })
    .finally(() => {
      db.close()
    })
}

//6. delete task by user once its one. eg ./todo done 1=========
function deleteTodoById(id){
  return db
    .deleteTodoByIdDb(id)
    .then(() => {
      console.log(`Task deleted: ${id}`)
    })
    .catch((err) => {
      logError('delete task by id' + err)
    })
    .finally(() => {
      db.close()
  })
}
//7. add a new task by entering a command such as ./todo add 'pet cat'
  function addNewTask (newTask){
    return db
      .addNewTaskDb (newTask)
      .then ((newTask)=>{
        console.log(`New task added:${newTask}`)
      })
      .catch((err) => {
        logError('add new task: ' + err)
      })
      .finally(() => {
        db.close()
      })
  }
//8.Update a task by ID
function updateTask (id, updatedTask){
  return db
   .updateTaskDb (id, updatedTask)
   .then (() =>{
    console.log( `Task updated:${id}.${updatedTask}` )
    })
    .catch ((err)=>{
      logError ('task not updated: ' + err)
    })
    .finally (()=>{
      db.close()
   })
}
//9.enable user to search for task containing a search term eg. ./todo search 'wire' =====
function searchTaskByWord(searchWord) {
  return db
    .searchTaskByWordDb (searchWord) 
    .then ((task)=>
      printTodos(task))
    .catch ((err) =>{
      logError('word not found: '+ err)})
    .finally(()=>{
      db.close()
    })
}

//.11 Enable users to mark a task complete, without deleting it from the database
  function taskCompleted(id, task){
    return db
      .taskCompeleteDb(id, task)
      .then (()=>
      console.log(`Task completed:${id}.${task}`))
      .catch ((err) =>{
        logError('Task complete not updated: '+ err)})
      .finally(()=>{
        db.close()
      })
  }

//====================

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  selectOneTodo,
  deleteTodoById,
  addNewTask,
  updateTask,
  searchTaskByWord,
  taskCompleted
}
