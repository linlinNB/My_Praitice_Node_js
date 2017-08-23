let fs = require('fs');

fs.link('./test.txt', './test_link.txt', (error) => {
    if (error) {
        console.log('创建硬链接失败')
    } else {
        console.log('创建硬链接成功')
        fs.unlink('./test_link.txt', (error) => {
            if (error) {
                console.log('异步调用本机硬链接失败')
            } else {
                console.log('异步调用本机硬链接成功')
            }
        })
    }
})