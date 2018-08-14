const express = require('express')
const app = express()
const api = require('./api')

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', api)
app.use(express.static('static'))

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
