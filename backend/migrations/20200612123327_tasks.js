const tableNames = require('../src/constants/tableNames')

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.tasks, (t) => {
    t.increments('id').unsigned().primary(),
      t.integer('parent_id').nullable(),
      t.string('title', 255).notNull(),
      t.string('description', 1024).nullable(),
      t.dateTime('start').notNull(),
      t.dateTime('end').nullable(),
      t.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.tasks)
}
