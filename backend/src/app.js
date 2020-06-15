const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const helmet = require('helmet')

const middleware = require('./middlewares')
const api = require('./api')

const app = express()

app.use(morgan('tiny'))
app.use(compression())
app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to gamification of life API',
  })
})

app.use('/api', api)

app.use(middleware.notFound)
app.use(middleware.errorHandler)

module.exports = app
