let fs = require('fs');

var writedata;
fs.readFile('C:\\Users\\95262\\Pictures\\最短路径演示\\99A.jpg','base64', (error, data) => {
    if(error) {
        console.log('读取文件失败');
    } else {
fs.writeFile('./copy99A.jpg', data, 'base64', (error) => {
    if (error) {
        console.log('写入文件出错')
    } else {
        console.log('赋值文件完成')
    }
})

}
})

/*console.log('测试数据流 writedata = ', writedata);*/

