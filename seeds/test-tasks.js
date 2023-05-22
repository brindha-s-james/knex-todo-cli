/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    { id: 1, task: 'laundry', completed: false },
    { id: 2, task: 'dishes', completed: false },
    { id: 3, task: 'learn JS', completed: false },
  ])
}
