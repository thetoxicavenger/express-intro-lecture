const express = require('express')
const bodyParser = require('body-parser')
let todos = require('./todos')
const countingRequestsMiddleware = require('./middleware/counting-requests.js')

const app = express()

app.use(bodyParser.json()) // calling it means configurable middleware
app.use(countingRequestsMiddleware({ log: true }))

app.get('/test', (req, res) => {
    res.send('Hello, world!')
})

app.get('/todos', (req, res) => {
    res.json(todos)
})

app.listen(3000)