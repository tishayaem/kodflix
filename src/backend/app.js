const express = require('express')
const app = express()
const getListOfShows = require('./list')

app.get('/rest/shows', (req, res) => res.send(getListOfShows()))

app.listen(3000, () => console.log('Example app listening on port 3000!'))