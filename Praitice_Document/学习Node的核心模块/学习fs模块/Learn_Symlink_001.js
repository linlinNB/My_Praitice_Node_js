let fs = require('fs');

fs.unlink('../学习ls模块的软链接', (error) => {
    if (error) {
        console.log('删除软链接失败')
    } else {
        console.log('删除软链接成功')
}
})

//为文件夹进行软链接的创建

/*
{
    fs.symlink('./学习ls模块', '../学习ls模块的软链接', 'junction', (error) => {
        if (error) {
            console.log('创建软链接失败, error = ', error)
        } else {
            console.log('创建软链接成功')
            fs.readlink('../学习ls模块的软链接', (error, linkstring) => {
                console.log('获取的链接 = ', linkstring)
        })
        }
    })
}*/
