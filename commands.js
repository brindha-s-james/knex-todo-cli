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

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}


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


function deleteTask(id){
  return db
  .deleteTaskById(id)
  .then((task) => {
    console.log('Deleted')
  })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
  }

  
  function logError(err) {
    console.error('Uh oh!', err.message)
}

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

module.exports = {
  list,
  add,
  displayTodo,
  deleteTask,
  update
}
