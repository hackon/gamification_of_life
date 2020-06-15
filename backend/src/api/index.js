const express = require('express')

const v1 = require('./v1')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    messge: 'My little api',
  })
})
router.use('/v1', v1)

module.exports = router
