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

function displayId(input) {
  //send the id to the db.js (getids func)
  //return the data for specific id
  //use a promise to print out that info in terminal
  const id = input
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

function deleteTask(input) {
  const id = input
  displayId(id)
  return db
    .deleteTaskbyId(id)
    .then((todos) => {
      console.log('task has been deleted')
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function insertTask(input) {
  const task = input
  return db
    .insertNewTask(task)
    .then((todos) => {
      console.log('task added')
      displayId(todos[0])
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => db.close())
}

// pass the id in edit, then find the id to update
function editTask(input, edit) {
  const id = input
  return db
    .editTask(id, edit)
    .then((todos) => {
      console.log('task updated')
      displayId(id)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => db.close)
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  displayId,
  deleteTask,
  insertTask,
  editTask,
}
