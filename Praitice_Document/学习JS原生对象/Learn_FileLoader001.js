let fs = require('fs');

fs.mkdir ('F:\\JavaScript\\Praitice_Document\\学习JS原生对象\\createFile',0o777,(error) => {
    if (error) {
        console.log('创建成功')
    } else {
        console.log("创建失败");
    }
})