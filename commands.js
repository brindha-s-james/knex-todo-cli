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

function displayId(id) {
  //send the id to the db.js (getids func)
  //return the data for specific id
  //use a promise to print out that info in terminal
  return db
    .getTaskById(id)
    .then((todos) => {
      console.log(todos)
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
  displayId,
}
