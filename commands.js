const db = require('./db')

//prints all todos//
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

//prints todo by id//
function displayId(input) {
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

//prints todo by owner
function displayTaskByOwner(input) {
  return db
    .getTaskByOwner(input)
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

//deletes task by id//
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

//inserts task//
function insertTask(owner, task) {
  return db
    .insertNewTask(owner, task)
    .then((todos) => {
      console.log('task added')
      displayId(todos[0])
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => db.close())
}

//edits task by id
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

//searches task by string input//
function searchTask(input) {
  return db
    .searchTask(input)
    .then((todos) => {
      console.log(todos)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(db.close)
}

//marks task as complete (true)//
function completeTask(input) {
  return db
    .completeTask(input)
    .then((todos) => {
      console.log('task completed')
      displayId(input)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(db.close)
}

//logs err message//
function logError(err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  displayId,
  deleteTask,
  insertTask,
  editTask,
  searchTask,
  completeTask,
  displayTaskByOwner,
}
