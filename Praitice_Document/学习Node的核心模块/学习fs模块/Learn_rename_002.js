let fs = require ('fs');

/**
 * rename指令会把相关文件夹包括子文件夹都会拷贝过来
 *
 */


fs.rename('../学习export练习', './copy_学习export练习', (error) => {
    if (error) {
        console.log('复制文件夹失败')
    } else {
        console.log('复制文件夹成功')
    }
})