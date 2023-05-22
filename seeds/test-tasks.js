/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, name: 'vaccuming', completed: false},
    {id: 2, name: 'laundry', completed: false},
    {id: 3, name: 'groceries', completed: false}
  ]);
};
