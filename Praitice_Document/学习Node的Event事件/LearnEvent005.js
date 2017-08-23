/**
 * Created by 95262 on 2017/7/16.
 */
var http = require('http')
var server = http.createServer()

var myfun = function (req) {
    console.log('这是我自己定义的数据处理函数')
}

server.on('request', function (req, res) {
    console.log('接受到了浏览器请求')
})

server.on('request', myfun)

server.on('request', function (req, res) {
    console.log('服务器进行数据回传')
    res.end()
})

server.removeAllListeners('request')

server.on('request', function (req, res) {
    console.log('清除之后所做的处理')
    /*res.end()*/
})

server.listen(1337, '127.0.0.1')
