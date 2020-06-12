const express = require('express')

const tasks = require('./tasks/tasks.routes')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    messge: 'v1',
  })
})
router.use('/tasks', tasks)

module.exports = router
