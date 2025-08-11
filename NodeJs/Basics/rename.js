const fs = require('fs');

fs.rename("MERN/NodeJs/sample.txt","hello.txt",function(err){
    if(err) console.log(err);
    else console.log("done");
})