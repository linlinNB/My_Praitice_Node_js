let fs =  require('fs');


fs.open('./test.txt', 'r', (error, result) => {
    var buffer = new Buffer(255);
    fs.read(result, buffer, 0, 21, 3, (err, bytesRead, buffer) => {
        console.log('读取的数据 = ', buffer.slice(0, bytesRead).toString())
    })
})