const express = require('express')
const bodyParser = require('body-parser')
let todos = require('./todos')
const countingRequestsMiddleware = require('./middleware/counting-requests.js')

const app = express()

app.use(bodyParser.json()) // calling it means configurable middleware
app.use(countingRequestsMiddleware({ log: false }))

app.get('/test', (req, res) => {
    res.send('Hello, world!')
})

app.get('/todos', (req, res) => {
    res.json(todos)
})

// get single todo
// /todos/:id
app.get('/todos/:id', (req, res) => {
    const { id } = req.params
    const indvTodo = todos.find(todo => todo.id === parseInt(id))
    res.json(indvTodo)
})

// POST request
app.post('/todos', (req, res) => {
    todos.push(req.body)
    res.json(req.body)
})

// app.patch('/todos/:id')

app.listen(3000)