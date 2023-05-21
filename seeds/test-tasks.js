/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Todos').del()
  await knex('Todos').insert([
    {id: 5, task: 'washing'},
    {id: 6, task: 'dishes'},
    {id: 7, task: 'vacuuming'}
  ]);
};
