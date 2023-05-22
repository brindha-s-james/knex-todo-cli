/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'do some code', Compleated: true },
    { id: 2, task: 'get some fresh air', Compleated: true },
    { id: 3, task: 'have lunch', Compleated: true },
    { id: 4, task: 'wash clothes', Compleated: true },
  ])
}


// added in compleated true to test out but still unsure how to check
// off weather a task is compleate as it still logs not compleated