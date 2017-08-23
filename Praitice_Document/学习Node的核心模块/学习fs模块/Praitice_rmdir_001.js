let fs = require('fs')

/*fs.rmdir('./测试文件夹', (error) => {
    if (error) {
        console.log('删除失败')
    } else {
        console.log('删除成功')
    }
})*/


fs.stat('./测试文件夹', (error, stats) => {
    if (error) {
        console.log('没有此文件')
        fs.mkdir('./测试文件夹', 0o777, (error) => {
            if (error){
                console.log('创建测试文件夹失败')
            } else {
                console.log('创建测试文件夹成功')
            }
        })
    } else {
        console.log('找到此文件')
        fs.rmdir('./测试文件夹', (error) => {
            if (error){
                console.log('删除文件夹失败')
            } else {
                console.log('删除文件夹成功')
            }
        })
    }
})