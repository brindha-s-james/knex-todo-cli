/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todo').del()
  await knex('todo').insert([
    {
      id: 1,
      jobs: 'Wash Dishes',
      time: '5:05pm',
      end_time: '5:15pm',
      music_while_working: 'Pot luck',
      completed: false,
    },
    {
      id: 2,
      jobs: 'Buy Lollies from Dairy',
      time: '5:20pm',
      end_time: '5:40pm',
      music_while_working: 'Skipping Frog',
      completed: false,
    },
    {
      id: 3,
      jobs: 'Watch TV',
      time: '5:50pm',
      end_time: '10:50pm',
      music_while_working: 'TV',
      completed: true,
    },
  ])
}
