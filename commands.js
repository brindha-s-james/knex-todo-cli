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

function taskDone(id) {
  return db
    .delTodo(id)
    .then(() => {
      console.log("Deleted task with ID: " + id)
    })
    .catch(err => {
      console.log(err.message)
    })
    .finally(() => {
      db.close()
    })
}
function addTodo(id, task){
  return db.addTodo(id, task)
  .then(() => {
    console.log("I have added " + task + " to the todo list ")
  })
  .catch
}

function display(id) {
  return db
    .getTodo(id)
    .then(todo => {
      printTodos(todo)
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
  display,
  taskDone
}
