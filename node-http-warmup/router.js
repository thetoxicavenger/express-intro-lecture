/*

• In the context of a web server, what is a router? What are routes?
• Given the following router function, fill in the missing routes. What factors distinguish one route from the other? (HINT: all the necessary information is on the `req` object)

*/

const todos = [{ id: 1, text: "Brush Teeth", completed: true }, { id: 2, text: "Complete Galvanize", completed: false }]

function router(req, res) {
    res.setHeader('Content-Type', 'application/json')
    if (req.method === 'GET') {

        // GET all todos
        if (req.url === '/todos') {
            res.end(JSON.stringify(todos))
        }
        // GET single todo
        else {
            const id = parseInt(req.url[req.url.length - 1])
            res.end(
                JSON.stringify(
                    todos.find(
                        todo => todo.id === id
                    )
                )
            )
        }
    }

    // POST single todo
    else if (req.method === 'POST') {
        let body = []
        req.on('data', chunk => {
            body.push(chunk)
        }).on('end', () => {
            body = Buffer.concat(body).toString()
            const newTodo = {
                ...JSON.parse(body),
                id: todos[todos.length - 1].id + 1
            }
            todos.push(newTodo)
            res.end(JSON.stringify(newTodo))
        })
    }

    // BONUS: PATCH single todo


    // BONUS: DELETE single todo


}

module.exports = router