const express = require('express')

const queries = require('./tasks.queries')

const router = express.Router()

router.get('/', async (req, res) => {
  const tasks = await queries.find()
  res.json(tasks)
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const tasks = await queries.get(parseInt(id, 10) || 0)
    if (tasks) {
      return res.json(tasks)
    }
    return next()
  } catch (error) {
    return next(error)
  }
})

router.post('/', async (req, res) => {
  const { parentId, title, description, start, end } = req.body

  try {
    const task = await queries.create({
      parentId,
      title,
      description,
      start,
      end,
    })
    if (task) {
      return res.json(task)
    }
    return next()
  } catch (error) {
    return next(error)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    queries.del(id)
    return next({ id })
  } catch (error) {
    return next(error)
  }
})
module.exports = router
