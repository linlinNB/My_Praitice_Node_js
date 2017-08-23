let fs = require('fs');


fs.fstat (4, (error, stats) => {
    if (error){
        console.log(error);
    } else {
        console.log(stats);
    }
})