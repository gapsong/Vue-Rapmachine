var request = require('request-promise')
var cleaner = require('clean-html')
var cheerio = require('cheerio')
var rhymes = require('./rhymes.json')

var options = {
  'add-remove-tags': [
    'div',
    'p',
    'u',
    'b',
    'html',
    'body',
    'head'
  ]
}

var umlaut2utf = function(string) {
  string = string.replace('ö', '%C3%96')
  string = string.replace('Ö', '%C3%96')
  string = string.replace('ä', '%C3%A4')
  string = string.replace('Ä', '%C3%A4')
  string = string.replace('ü', '%C3%BC')
  string = string.replace('Ü', '%C3%BC')
  string = string.replace('ß', '%C3%9F')
  return string
}

var code2ascii = function(string) {
  string = string.replace(/(&#xF6;)/g, 'ö')
  string = string.replace(/(&#xD6;)/g, 'Ö')
  string = string.replace(/(&#xE4;)/g, 'ä')
  string = string.replace(/(&#xC4;)/g, 'Ä')
  string = string.replace(/(&#xFC;)/g, 'ü')
  string = string.replace(/(&#xDC;)/g, 'Ü')
  string = string.replace(/(&#xDF;)/g, 'ß')
  return string
}

function getRhymes(word) {
  return request({
    uri: 'http://www.reimbuch.net/reim-auf/' + word
  }).then((body) => {
    return new Promise((resolve, reject) => {
      var $ = cheerio.load(body)
      var temp = $('#textResult').attr('id', 'textResult').html()
      // var temp = $('div[style='padding-bottom: 30px;padding-top: 15px;padding-left: 10px;padding-right: 10px;']').html()
      $ = cheerio.load(temp)
      $('p').empty()
      temp = $.html()

      // cleans out the html
      return cleaner.clean(temp, options, function(html) {
        console.log('rhymes:', code2ascii(html))
        // delete empty strings
        temp = code2ascii(html).split(' ')
        temp = temp.filter((item) => {
          return item !== ''
        })
        return resolve(temp)
      })
      return reject({})
    })

  })
}

exports.getReimbuchRhymes = function(req, res) {
  var temp = req.params.word
  temp = umlaut2utf(temp)
  return getRhymes(temp).then((item) => {

    return res.json(item)
  })
}

// getReimbuchRhymes('Auto')
