const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todos').select()
}

function getTodo(id){
  return db('todos')
  .select()
  .where('id', id)
}

function delTodo(id) {
  return db('todos')
  .where('id', id)
  .del()
}

// Your DB functions go here

function close() {
  db.destroy()
}

function addTodo(id, task){
  return db
  .insert({
    id: id,
    task: task,
    Completed: false,
    priority: 'low'
  })
  .into('todos')
}

function updateTask(id, task) {
  return db('todos')
  .where('id', id)
  .update({task: task})
}

function findTask(task){
  return db('todos')
  .whereLike('task', `%${task}%`)
}

function completeTask(id) {
  return db('todos')
  .where('id', id)
  .update({Completed: true})
}





module.exports = {
  getTodos,
  close,
  getTodo,
  delTodo,
  addTodo,
  updateTask,
  findTask,
  completeTask
}
