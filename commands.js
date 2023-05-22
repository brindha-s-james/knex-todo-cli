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

function printById(id) {
  return db
    .getTaskById(id)
    .then((task) => {
      printTodos(task)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function delById(id) {
  return db
   .delTaskById(id)
    .then ((deleted) => {
      if (deleted == true) {
      console.log('Deleted Task ' + id)
    } else {
      console.log('Failed to Find Task ' + id)
    }})
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
  printById,
  delById,
}
