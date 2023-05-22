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
  .displayRow(idNum)
  .then((todo) => {
    return console.log(`${todo.id}: ${todo.name}`)
  })
  .catch((err) => {
    logError(err)
  })
  .finally(() => {
      db.close()
    })
}

function deleteTodo(idNum) {
  return db.deleteRow(idNum)
  .then(() => {
    return list()
  })
  .catch((err) => {
    logError(err)
  })
  .finally(() => {
      db.close()
    })
}

function addTodo(input) {
  const newTask = {
    name: input
  }
  return db.addRow(newTask)
  .then(() => {
    return list()
  })
  .catch((err) => {
    logError(err)
  })
  .finally(() => {
      db.close()
    })
}

function updateTodo(id, input) {
  return db.updateRow(id, input)
  .then(() => {
    return list()
  })
  .catch((err) => {
    logError(err)
  })
  .finally(() => {
      db.close()
    })
}

function searchTodo(query) {
  return db.searchRows(query)
  .then((todo) => {
    return console.log(`${todo.id}: ${todo.name}`)
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
  deleteTodo,
  addTodo,
  updateTodo,
  searchTodo
}
