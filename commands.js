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

function display(id) {
  return db
    .getTodos()
    .then((todos) => {
      todos.forEach(todo => {
        if (todo.id === +id) {
          console.log("task " + id + ": " + todo.task)
        }
      })
    })
    .catch((err) => {
      console.log(err.message)
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

function logError(err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  display
}
