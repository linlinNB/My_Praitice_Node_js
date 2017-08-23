let fs = require ('fs');


fs.utimes('./test.txt', new Date(), new Date(), (error) => {
    if (error) {
        console.log('出现错误', error)
    } else {
        console.log('文件时间修改成功');
        fs.stat ('./test.txt', (error, stats) => {
            if (error) {
                console.log('查看文件出现问题')
            }else {
                console.log('查看文件修改时间', stats.mtime);
            }
        })
    }
})