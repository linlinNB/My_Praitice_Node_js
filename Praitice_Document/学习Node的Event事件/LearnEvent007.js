/**
 * Created by 95262 on 2017/7/17.
 */
var http = require('http')
var server = http.createServer()
var events = require('events')

server.on('request', function (req, res) {
    if (req.uri !== '/favicon.ico') {
        console.log('服务器端收到请求')
    }
})

server.on('request', function (req, res) {
    if (req.url !== '/favicon.ico') {
        console.log('服务端进行数据处理')
    }
})

server.on('request', function (req, res) {
    if (req.url !== '/favicon.ico') {
        console.log('服务器端进行数据回传')
    }
    /*res.end()*/
})


server.listen(1337, '127.0.0.1')
console.log('对于request事件进行数据处理的function个数 = ' + events.EventEmitter.listenerCount(server, 'request'))
