const db = require('./db')

async function list() {
  const todos = await db.getTodos()
  try {
    await printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    db.close()
  }
}

async function singleTodo(id) {
  const todo = await db.getTodoById(id)
  try {
    await printTodos(todo)
  } catch (err) {
    logError(err)
  } finally {
    db.close()
  }
}

async function deleteTask(id) {
  await db.deleteTodo(id)
  list()
}

async function addTask(task) {
  await db.insertTodo(task)
  list()
}

async function updateTask(id, task) {
  await db.updateTodo(id, task)
  list()
}

async function complete(id, name) {
  await db.updateComplete(id, name)
  list()
}

async function search(task) {
  const res = await db.searchTask(task)
  try {
    await printTodos(res)
  } catch (err) {
    logError(err)
  } finally {
    db.close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    let complete = '✗'
    if (todo.completed) complete = '✔'

    if (todo.completed) {
      console.info(
        `${todo.id}: ${todo.task} - ${complete} completed by ${todo.user}`
      )
    } else {
      console.info(`${todo.id}: ${todo.task} - ${complete}`)
    }
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

module.exports = {
  list,
  singleTodo,
  deleteTask,
  updateTask,
  addTask,
  search,
  complete,
}
