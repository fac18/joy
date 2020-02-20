const express = require('express')
const morgan = require('morgan')
const path = require('path')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()

// Log all request to make error identification easier
app.use(morgan('combined'))

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')))

// app.use(express.json({ limit: '1mb' }))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

app.use(router)

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Joy happens at port ${port}`)
