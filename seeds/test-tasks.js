/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, task: 'Go shopping', completed: false},
    {id: 2, task: 'Shoot varmints', completed: false},
    {id: 3, task: 'cook a delicious Italian meal', completed: false}
  ]);
};
