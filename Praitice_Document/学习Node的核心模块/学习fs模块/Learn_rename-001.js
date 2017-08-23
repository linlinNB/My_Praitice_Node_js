let fs = require ('fs');

fs.rename('./test_doc', './copy_test_doc', (error) => {
    if (error) {
        console.log('复制失败')
    } else {
        console.log('复制成功')
    }
})
