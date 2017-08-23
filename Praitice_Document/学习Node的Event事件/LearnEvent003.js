/**
 * Created by 95262 on 2017/7/14.
 */
var http = require('http')
var server = http.createServer()

server.once('request', function (req, res) {
    if (req.url !== '/favicon.ico') {
        console.log('服务器端接受了第一次请求')
    }
})

server.once('request', function (req, res) {
    if (req.url !== '/favicon.ico') {
        console.log('服务器端接受了第二次请求')
    }
})

server.on('request', function (req, res) {
    console.log('进行服务器端回复操作')
    res.end()
})

server.listen(1337, '127.0.0.1')
