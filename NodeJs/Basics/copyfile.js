const fs = require('fs');

fs.copyFile("MERN/NodeJs/hello.txt","MERN/NodeJs/sample.txt",function(err){
    if(err) console.log(err);
    else console.log("done");
})