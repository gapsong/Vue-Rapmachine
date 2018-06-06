const express = require('express')
const router = express.Router()
var rhymesController = require('./rhymeshop')
var rhymes = require('./rhymes.json')

router.get('/', function (req, res) {
  return res.json(rhymes)
})

router.get('/rhymes/:word', rhymesController.getReimbuchRhymes)

router.get('/getRandomRhymes', rhymesController.getReimbuchRhymes)

module.exports = router
