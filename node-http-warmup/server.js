const http = require('http')
const router = require('./router')

http.createServer((req, res) => {
    router(req, res)
}).listen(3000)

