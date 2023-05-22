// THE FILE WHERE WE DECIDE WHAT TO DO & IN WHAT ORDER
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

function logError(err) {
  console.error('Uh oh!', err.message)
}

//added for getTodoById
function selectOneTodo(id) {
  return db
    .getTodoById(id)
    .then((task) => {
      printTodos(task)
 //     console.log(`todo #'${todos.id} + ${todos.task}`)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}


//added for delete and id
function deleteToDo(id) {
  return db.DeleteTodoById(id)
  .then((todos) => {
    printTodos(todos)
  })
  .catch((err) => {
    logError(err)
  })
  .finally(() => {
    db.close
  })
}

//add new task
function addNewTask(str) {
  return db.addNewTaskTodo(str)
  .then((todos) => {
    printTodos(todos)
  })
  .catch((err) => {
    logError(err)
  })
  .finally(() => {
    db.close
  })
}

//update task
function updateTodo(id, str) {
  return db.updateTask(id, str)
  .then((todos) => {
    printTodos(todos)
  })
  .catch((err) => {
    logError(err)
  })
  .finally(() => {
    db.close
  })
}

// search for a task by word
function searchByWord(word) {
  return db.searchTaskByWord(word)
    .then((tasks) => {
      printTodos(tasks)
    })
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close
    })
}

module.exports = {
  list,
  printTodos,
  logError,
  selectOneTodo,
  deleteToDo,
  addNewTask,
  updateTodo,
  searchByWord
}
