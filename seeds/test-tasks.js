/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Todos').del()
  await knex('Todos').insert([
    {id: 1, task: 'washing', Completed: false},
    {id: 2, task: 'dishes', Completed: false},
    {id: 3, task: 'vacuuming', Completed: false}
  ]);
};
