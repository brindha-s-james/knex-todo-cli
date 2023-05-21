/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('todo', (table) =>{
    table.increments('id')
    table.string ('jobs')
    table.string ('time')
    table.string ('end time')
    table.string ('music while working')
    table.boolean ('completed')
  } )
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('todo')
  
};
