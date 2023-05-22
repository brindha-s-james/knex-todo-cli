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

function displayTodo(id) {
  return db
    .getTodoById(id)
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

function deleteToDo(id) {
  return db
    .delToDobyId(id)
    .then(() => {
      console.log(`Entry ${id} has been deleted`)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}
function clearNum(num) {
  return db
    .clearTable(num)
    .then(() => {
      console.log(`WHAT HAVE YOU DONE??`)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function newTodo(str) {
  return db
    .addTodo(str)
    .then((todos) => {
      console.log(`"${str}" has been added (ID ${todos})`)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function updateToDo(id, str) {
  return db
    .updateTask(id, str)
    .then(() => {
      console.log(`Entry ${id} has been updated to "${str}".`)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function printTodos(todos) {
  todos.forEach((todos) => {
    console.info(`${todos.id}: ${todos.task}`)
  })
}

function logError(err) {
  console.error('User Error!', err.message)
}

module.exports = {
  list,
  displayTodo,
  deleteToDo,
  newTodo,
  updateToDo,
  clearNum,
}
