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
function selectOneTaskbyIdCmd (id){
   return db
    .selectOneTaskbyIdDb(id)
    .then((task) => {
      console.log(task)
    })
    .catch((err) => {
      logError('select one task by id:' + err)
    })
    .finally(() => {
      db.close()
    })
}

//6. delete task by user once its one. eg ./todo done 1=========
function deleteTaskByIdCmd(id){
  return db
  .deleteTaskByIdDb(id)
  .then(() => {
    console.log('deleted')
  })
  .catch((err) => {
    logError('delete task by id' + err)
  })
  .finally(() => {
    db.close()
  })
}
//7. add a new task by entering a command such as ./todo add 'pet cat'
  function addNewTaskCmd (newTask){

    return db
    .addNewTaskDb (newTask)
    .then ((newTask)=>{
console.log(`This is the${newTask}` )
    })
    .catch((err) => {
      logError('add new task: ' + err)
    })
    .finally(() => {
      db.close()
    })
  }
//8.Update a task by ID
function updateTaskCmd (id, task){
  return db
   .updateTaskDb (id, task)
   .then (() =>{
    console.log( `${task} updated` )
    })
    .catch ((err)=>{
      logError ('task not updated: ' + err)
    })
    .finally (()=>{
      db.close()
   })
}
//9.enable user to search for task containing a search term eg. ./todo search 'wire' =====
function searchTaskByWordCmd(searchWord) {
  return db
  .searchTaskByWord (searchWord) 
  .then ((task)=>
    printTodos(task))
  .catch ((err) =>{
    logError('word not found: '+ err)})
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
  selectOneTaskbyIdCmd,
  deleteTaskByIdCmd,
  addNewTaskCmd,
  updateTaskCmd,
  searchTaskByWordCmd,
}
