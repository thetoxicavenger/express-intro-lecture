let totalRequests = 0

module.exports = function (options) {
    return function (req, res, next) {
        totalRequests++
        if (options.log) {
            console.log(`Api has received ${totalRequests} requests so far.`)
        }
        next()
    }
}