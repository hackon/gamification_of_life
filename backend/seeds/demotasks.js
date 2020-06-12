const tableNames = require('../src/constants/tableNames')

exports.seed = async (knex) => {
  // Deletes ALL existing entries
  return knex(tableNames.tasks)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(tableNames.tasks).insert([
        { id: 1, title: 'Task 1', description: 'Something useful', start: 1 },
        { id: 2, title: 'Task 2', description: 'Something useful', start: 1 },
        { id: 3, title: 'Task 3', description: 'Something useful', start: 1 },
      ])
    })
}
