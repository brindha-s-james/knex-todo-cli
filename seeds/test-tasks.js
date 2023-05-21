/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, task: 'laundry'},
    {id: 2, task: 'dishes'},
    {id: 3, task: 'learn JS'}
  ]);
};
