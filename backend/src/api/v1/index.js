const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    messge: 'v1',
  })
})

module.exports = router
