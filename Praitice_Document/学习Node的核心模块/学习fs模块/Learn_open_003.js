let fs = require('fs');


fs.open('./test.txt', 'r', (error, result) => {
    var buffer = new Buffer (255);
    fs.read(result, buffer, 0, 21, 0, (error, bytesRead, buffer) => {
        //已经将相关的数据读入
        //下面的回调应该将相关的数据写入
        fs.open('./test_write.txt', 'w', (error, result) => {
            if (error) {
                console.log('尝试文件创建失败');
            } else {
                fs.write(result, buffer, 0, 21, 0, (error, bytesWritten, buffer) => {
                    if (error) {
                        console.log('文件写入失败');
                    } else {
                        console.log('文件写入成功');
                        fs.close(result, ()=> {
                            console.log('文件流关闭');
                        });
                    }
                })
            }
        })
    })
})