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
    console.info(`${todo.id}: ${todo.task}, Completed: ${Boolean(todo.completed)}`)
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
      console.log(`Successfully deleted ${deleted}`)
    //   if (deleted == true) {
    //   console.log('Deleted Task ' + id)
    // } else {
    //   console.log('Failed to Find Task ' + id)}
})
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
}

function addTask(input) {
  return db
    .addTask(input)
    .then((result) => console.log(`Added entry '${result[0].task}' at position ${result[0].id}`))
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
  }

function updateTask(target, update) {
  return db
    .update(target, update, 'task')
    .then((result) => console.log(`Task at position ${result[0].id} set to ${result[0].task}`))
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
  }

  function searchTasks(searchTerm) {
    return db
    .getTodos()
    .then((todos) => 
    todos.forEach((task) => {
      if (task.task.toLowerCase().match(searchTerm.toLowerCase()) != null) {
        printTodos([task])
      }
      
    }))
    .catch((err) => {
      logError(err)
    })
    .finally(() => {
      db.close()
    })
  }
  
function completeTask(id, bool) {
  let status = 'complete'
  if (bool == false) status = 'incomplete'  
  return db
  .update(id, bool, 'completed')
  .then((task) => console.log(`'${task[0].task}' set to ${status}!`))
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
  addTask,
  updateTask,
  searchTasks,
  completeTask
}
