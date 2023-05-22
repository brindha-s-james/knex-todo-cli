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

function selectOneTodo(id) {
  return db
    .selectOne(id)
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function deleteTodo(id) {
  return db
    .deleteRow(id)
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function addJob(jobName) {
  return db
    .addRow(jobName)
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function updateJob(id, jobName) {
  return db
    .editRow(id, jobName)
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function findTheJob(job) {
  return db
    .findJob(job)
    .then((data) => {
      console.log(data)
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
    console.info(`${todo.id}: ${todo.jobs}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  selectOneTodo,
  deleteTodo,
  addJob,
  updateJob,
  findTheJob,
}
