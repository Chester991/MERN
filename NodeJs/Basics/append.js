const fs = require('fs');

fs.appendFile("MERN/NodeJs/sample.txt" , "Billi or cats" , function(err){
    if(err) console.log(err);
    else console.log("done");
})