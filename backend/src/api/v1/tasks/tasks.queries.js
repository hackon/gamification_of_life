const db = require('../../../db')

const tableNames = require('../../../constants/tableNames')

const fields = [
  'id',
  'parent_id',
  'title',
  'description',
  'start',
  'end',
  'created_at',
]

async function find() {
  return db(tableNames.tasks).select(fields)
}
async function get(id) {
  return db(tableNames.tasks).select(fields).where({ id }).first()
}
async function create(task) {
  return db(tableNames.tasks)
    .insert({
      parentId: task.parentId,
      title: task.title,
      description: task.description,
      start: task.start,
      end: task.end,
    })
    .returning(fields)
}

module.exports = {
  find,
  get,
  create,
}
