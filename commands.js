const db = require('./db')

//list all the tasks
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

//displays the selected task
function displayTodo(id){
 return db
 .showTaskById(id)
 .then((task) => {
  console.log(task)
})
.catch((err) => {
  logError(err)
})
.finally(() => {
  db.close()
})
}

//deletes the selected task
function deleteTask(id){
  return db
  .deleteTaskById(id)
  .then(() => {
    console.log('Deleted')
  })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

//adds a new task
function add(newTask){
  return db
  .addTasktoTodo(newTask)
  .then((newTask) => {
    console.log('Added:' + (newTask))
  })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

//updates an existing task by id
function update(id, input){
  return db.updateTaskById(id, input)
  .then((updatedTask) =>{
    console.log(updatedTask)
  })
  .catch((err) => {
    logError(err)
  })
  .finally(() => {
    db.close()
  })
}

//updates existing task by id to be completed
function complete(id){
  return db.completeTaskById(id)
  .then((completeTask) =>{
    console.log(completeTask)
  })
  .catch((err) => {
    logError(err)
  })
  .finally(() => {
    db.close()
  })
}

//searches by key word
function searchTask(searchWord){
  return db.searchByWord(searchWord)
  .then((searchWord) =>{
    console.log(searchWord)
  })
  .catch((err) => {
    logError(err)
  })
  .finally(() => {
    db.close()
  })
}

//prints format of todos
function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task} ${todo.completed}`)
  })
}

//error
function logError(err) {
  console.error('Uh oh!', err.message)
}




module.exports = {
  list,
  add,
  displayTodo,
  deleteTask,
  update,
  searchTask,
  complete
}
