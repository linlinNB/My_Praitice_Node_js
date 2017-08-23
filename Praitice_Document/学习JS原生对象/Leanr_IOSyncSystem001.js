var fs = require('fs');

try {
    var data = fs.readFileSync('./praitice_IO001.txt', 'base64');
    console.log(data)
} catch (err) {
    console.log('读取文件失败')
}