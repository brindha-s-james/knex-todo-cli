const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

function getTaskById(id) {
  return db('todos').where('id', id)
}

function delTaskById(id) {
  return db('todos').where('id', id).del()
}

function addTask(input) {
  return db('todos').insert({
    task: input
  },
  ['id', 'task']
  )
}

function update(target, update) {
  console.log(target)
  return db('todos').where('id', target).orWhere('task', target).update({
    task: update
  },
  ['id', 'task'])
}


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
  update
}

