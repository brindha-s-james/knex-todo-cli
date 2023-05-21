/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, owner: 'tayla', task: 'laundry', complete: false },
    { id: 2, owner: 'gemma', task: 'breakfast', complete: true },
    { id: 3, owner: 'bob', task: 'rubbish', complete: false },
  ])
}
