var fs = require('fs');


fs.readFile(`./praitice_IO001.txt`, 'base64', (err, data) => {
    /*console.log(data.toString())*/
    console.log(data)
})