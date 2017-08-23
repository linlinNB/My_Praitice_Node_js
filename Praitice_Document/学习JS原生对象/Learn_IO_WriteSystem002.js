var fs = require('fs')


let data = '\nThis is my test about write_Sync_System';


try{
    fs.writeFileSync('./praitice_IO001.txt', data, ['base64', ,'wx']);
} catch (error) {
    console.log('我靠失败了')
}