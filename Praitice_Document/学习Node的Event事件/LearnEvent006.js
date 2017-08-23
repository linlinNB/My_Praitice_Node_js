/**
 * Created by 95262 on 2017/7/17.
 */

var http = require('http')
var server = http.createServer()

server.on('request', function (req, res) {
    if (req.url != '/favicon.ico') {
        console.log('服务器端获取请求 = ' + req.url)
    }
    res.end()
})

server.on('mytest001', function (arg1, arg2, arg3) {
    console.log('自定义事件被触发')
    console.log('arg1 = ' + arg1)
    console.log('arg2 = ' + arg2)
    console.log('arg3 = ' + arg3)
})

server.emit('mytest001', '自定义数据1', '自定义数据2', '自定义数据3')

server.listen(1337, '127.0.0.1')
