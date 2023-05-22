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
    console.info(`${todo.id}: ${todo.name}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

function displayTodo(idNum) {
  return db
  .displayRows(idNum)
  .then((todo) => {
    return console.log(todo.id + ": " + todo.name)
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
  displayTodo,
}
