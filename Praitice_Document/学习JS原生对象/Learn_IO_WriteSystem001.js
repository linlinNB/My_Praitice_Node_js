var fs = require('fs')


let data = '\nThis is my test about writeSystem';

/**
 * 发现此处不支持rest函数，再次留作标记
 */
fs.writeFile('./praitice_IO001.txt', data, ['base64', ,'w'], (error) => {
    if(error) {
        console.log('读取文件失败')
    } else {
        console.log('写入成功')
    }
})