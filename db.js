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

function delTaskById(id) {
  return db('todos').where('id', id).del(['id', 'task'])
}

function addTask(input) {
  return db('todos').insert({
    task: input
  },
  ['id', 'task']
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
  delTaskById,
  addTask,
  update,
  getTaskByStatus
}

