/**
 * Created by 95262 on 2017/7/14.
 */
var http = require('http')
var server = http.createServer()

var mytestfun = function (req) {
    if (req.url !== '/favicon.ico') {
        console.log('这是设置失去监听的自定义事件')
    }
}

server.on('request', function (req, res) {
    console.log('服务器接收到请求')
})

server.on('request', function (req, res) {
    console.log('此时服务器接收到请求的url = ' + req.url)
    res.end()
})

server.on('request', mytestfun)

server.removeListener('request', mytestfun)
server.listen(1337, '127.0.0.1')
