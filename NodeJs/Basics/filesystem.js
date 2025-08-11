const fs = require('fs');

var num = fs.readdirSync('./MERN');

//console.log(num);


var files = fs.readdir('./boll',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result',files);
});