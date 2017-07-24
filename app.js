const express = require('express')
var path = require('path')
const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, function () {
  console.log('listening')
})


app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})