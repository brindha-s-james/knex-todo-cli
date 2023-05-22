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
  id = +id
  return db('todo')
    .select()
    .then((todos) => {
      // console.log(todos)
      // console.log(id)

      todos.forEach((todo) => {
        if (todo.id === id) {
          todo.del()
        }
      })
      console.log(todos)
      db.destroy()
    })
    .catch((err) => {
      console.log(err.message)
      db.destroy()
    })
}

4
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
}
