const config = require('./knexfile').development
const db = require('knex')(config)

function getTodos() {
  return db('todo').select()
}

function close() {
  db.destroy()
}

// Your DB functions go here
function selectOne(id) {
  return db('todo').where('id', id).select()
}

function deleteRow(id) {
  return db('todo').where('id', id).select().del()
}

function addRow(JobName) {
  return db('todo')
    .insert([{ jobs: JobName }])
    .into('todo')
}

function editRow(id, jobName) {
  return db('todo').where('id', id).select().update({ jobs: jobName })
}

module.exports = {
  getTodos,
  close,
  selectOne,
  deleteRow,
  addRow,
  editRow,
}
