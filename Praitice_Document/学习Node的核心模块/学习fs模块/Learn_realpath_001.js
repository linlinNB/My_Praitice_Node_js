let fs = require('fs');


fs.realpath('./test.txt', 'utf-8', (error, resolvedPath) => {
    if (error) {
        console.log('出现错误', error)
    } else {
        console.log('封装的信息', resolvedPath)
    }
})


/*
{
    fs.realpath('./test_001.txt', 'utf-8', (error, resolvedPath) => {
        if (error) {
            console.log('出现错误', error)
        } else {
            console.log('封装信息', resolvedPath)
        }
    })
}*/

{
    fs.realpath('./test.txt', 'utf-8', (error, resolvedPath) => {
        if (error) {
            console.log('出现错误', error)
        } else {
            console.log('封装信息', resolvedPath)
        }
    })
}
