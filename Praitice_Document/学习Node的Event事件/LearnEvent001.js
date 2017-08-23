/**
 * Created by 95262 on 2017/7/14.
 */

var http = require('http')
var server = http.createServer()

//为server服务器在接收到客户端请求时触发request事件绑定

server.on('request', function (request, response) {
    /*console.log(request.url)*/
    if (request.url !== "/favicon.ico") {
        console.log("此时浏览器请求的位置 = " + request.url)
    }
    response.end()
})


server.listen(1337, "127.0.0.1")
