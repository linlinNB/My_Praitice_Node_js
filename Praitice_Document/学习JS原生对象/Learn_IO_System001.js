var fs = require('fs');


fs.readFile('./praitice_IO001.txt', (err, data) => {
    if (err) {
        console.log("读取文件发生错误")；
    } else {
        console.log(data)
    }
})