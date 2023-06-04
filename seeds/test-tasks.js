/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    {id: 1, task: 'make bed'},
    {id: 3, task: 'brush teeth'},
    {id: 2, task: 'eat breakfast'},
  ]);
};
