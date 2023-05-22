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
  return db('todo').where('id', id).select() // Running the .where to find where the id is === to the id entered, then selecting that row!
}

function deleteRow(id) {
  return db('todo').where('id', id).select().del() // Running the selected row and deleting it
}

function addRow(JobName) {
  return db('todo')
    .insert([{ jobs: JobName }]) // Inserting the new row with the job being a parameter
    .into('todo') // putting it into the todo table
}

function editRow(id, jobName) {
  return db('todo').where('id', id).select().update({ jobs: jobName }) // updating job name by id
}

function findJob(job) {
  return db('todo').whereLike('jobs', `%${job}%`).select() // Finding where the job 'wash' matches in the database. search whereLike on the knex website
}

function complete(id) {
  return db('todo').where('id', id).select().update({ job_complete: true }) // Adding a complete function so we can update if the job is complete.
}

function showPriority() {
  return db('todo').whereNull('job_complete').select() // Showing all the tasks where the job_complete is null/non completed.
}

module.exports = {
  getTodos,
  close,
  selectOne,
  deleteRow,
  addRow,
  editRow,
  findJob,
  complete,
  showPriority,
}
