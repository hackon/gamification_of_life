const { Model } = require('objection')

const tableNames = require('../../../constants/tableNames')

class Tasks extends Model {
  static get tableName() {
    return tableNames.tasks
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id', 'title', 'description', 'start', 'createdAt'],
      properties: {
        id: { type: 'integer' },
        parentId: { type: ['integer', 'null'] },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 0, maxLength: 1024 },
        start: { type: 'number' },
        end: { type: ['number', 'null'] },
        createdAt: { type: 'number' },
      },
    }
  }
}

module.exports = Tasks
