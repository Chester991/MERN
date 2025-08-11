const fs =  require('fs');
// unlink means deleting the file 
fs.unlink("MERN/NodeJs/sample.txt",function(err){
    if(err) console.log(err.message)
    else console.log("removed");
})