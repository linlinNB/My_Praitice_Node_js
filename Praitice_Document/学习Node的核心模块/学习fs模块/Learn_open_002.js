let fs = require('fs');


fs.open('./test.txt', 'r', (error, result) => {
    var buffer = new Buffer (255);
    fs.read(result, buffer, 0,21, 3, (error, byteRead, buffer) => {
        console.log(buffer.slice(0, byteRead).toString());
        console.log('继续练习提取字节流');
        //此处的文件描述符已经到了21
        fs.read (result, buffer,0, 15, null, (error, byteRead, buffer) => {
            console.log(buffer.slice(0, byteRead).toString());
        });
    });
});