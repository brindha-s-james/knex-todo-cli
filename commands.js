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

function add( ){
console.log('add')
}

// function selectOneTodo(id) {
  
// }

function displayTodo(id){
 return db
 .showTask(id)
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



function logError(err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  add,
  displayTodo
}
