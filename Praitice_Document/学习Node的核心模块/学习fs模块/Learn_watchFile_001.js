let fs = require('fs');

fs.watchFile('./test.txt', { persistent : true , interval: 1000}, (curr, prev) => {
    console.log('当前状态的文件信息 = ', curr)
    console.log('1000ms前文件状态的信息 = ', prev)
    fs.unwatchFile('./test.txt', (error) => {
        if (error){
            console.log('文件监听失败')
        } else {
            console.log('文件监听成功')
        }
    })
})