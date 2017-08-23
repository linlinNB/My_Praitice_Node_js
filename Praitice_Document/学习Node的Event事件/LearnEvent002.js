/**
 * Created by 95262 on 2017/7/14.
 */
var http = require('http')
var server = http.createServer()


server.on('request', function (request, response) {
    if (request.url !== '/favicon.ico') {
        console.log('服务器端接受了请求')
    }
})

server.on('request', function (request, response) {
    if (request.url !== '/favicon.ico') {
        console.log('此时url地址 = ' + request.url)
    }
})

server.on('request', function (request, response) {
    if (request.url !== '/favicon.ico') {
        console.log('开始进行服务器回传')
    }
    response.end()
})

server.listen(1337, '127.0.0.1')