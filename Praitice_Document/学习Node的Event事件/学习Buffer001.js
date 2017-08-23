/**
 * Created by 95262 on 2017/7/4.
 */
/*var str = '深入浅出Node.js'
var buffer = new Buffer(str, 'utf-8')
console.log(buffer)

var buffer1 = new Buffer(1000)
console.log("buffer1的长度 = " + buffer1.length)

console.log('这是进行数据流的传输')*/
var fs = require('fs')
var iconv = require('iconv-lite')

var rs = fs.createReadStream('test.md')
var tempdata = []
var size = 0
rs.on('data', function (chunk) {
    tempdata.push(chunk)
    size += chunk.length
});
rs.on('end', function () {
    var buf = Buffer.concat(tempdata, size)
    var str = iconv.decode(buf, 'gb2312')
    console.log(str)
})