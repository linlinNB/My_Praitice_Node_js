/**
 * Stats是File System中一个对象，此对象具体描述相关的文件信息
 *
 * 其中使用的次数比较多的信息：
 *  1.atime ： 此文件的最近的访问时间
 *  2.ctime ： 此文件的最近的最近变更时间
 *  3.mtime ： 此文件最近的修改时间
 *  3.birthtime ： 此文件被创建的时间
 */

let fs = require('fs');


{
    fs.stat('./test.txt', (error, stats) => {
        console.log('查看stats对象发封装的具体实例 = ', stats);
    console.log('文件的创建时间 = ', stats.birthtime);
    console.log('文件最近的访问时间 = ', stats.atime);
    console.log('文件最近修改时间 = ', stats.mtime);
    })
}

{
    fs.stat('./test_001.txt', (error, stats) => {
        if (error) {
            console.log('文件未找到')
            console.log('查看错误信息 = ', error)
        } else {
            console.log('查看stats对象发封装的具体实例 = ', stats);
        }
    })
}