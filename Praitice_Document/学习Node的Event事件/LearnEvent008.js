/**
 * Created by 95262 on 2017/7/17.
 */
var http = require('http')
var server = http.createServer()

server.on('newListener', function (e, f) {
    console.log('添加了事件监听 ' + e + '，并且等待处理')
    console.log('事件类型 = '  + f)
})

server.on('removeListener', function (e, f) {
    console.log('删除了事件监听 ' + e + ', 并且已经处理')
    console.log('事件类型 = ' + f)
})

var mytestfun = function (req, res) {
    if (req.url !== '/favicon.ico') {
        console.log('这是自定义的事件处理')
    }
}

server.on('request', function (req, res) {
    if (req.uri !== '/favicon.ico') {
        console.log('服务器端收到请求')
    }

})

server.on('request', function (req, res) {
    if (req.uri !== '/favicon.ico') {
        console.log('服务器进行请求处理')
    }

})

server.on('request', function (req, res) {
    if (req.uri !== '/favicon.ico') {
        console.log('服务器端响应请求')
    }
    res.end()
})

server.on('request', mytestfun)
server.on('removeListener',mytestfun)

server.listen(1337, '127.0.0.1')


