const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

function getTaskById(id) {
  return db('todos').where('id', id).orWhere('task', id)
}

function getTaskByStatus(bool) {
  return db('todos').where('completed', bool)
}

function delTask(field, id) {
  return db('todos').where(field, id).del(['id', 'task'])
}

function addTask(input) {
  return db('todos').insert({
    task: input,
    completed: false
  },
  ['id', 'task', 'completed']
  )
}

function update(target, update, field) {
  return db('todos').where('id', target).orWhere('task', target).update({
    [field]: update
  },
  ['id', 'task', 'completed'])
}

// function search(searchTerm) {
//   return db('todos').where('task',)

// }


// Your DB functions go here

function close() {
  db.destroy()
}

module.exports = {
  getTodos,
  close,
  getTaskById,
  delTask,
  addTask,
  update,
  getTaskByStatus
}

