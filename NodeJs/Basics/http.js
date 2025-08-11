const http = require('http');

/*const server = http.createServer(function(req,res){
    res.end("billi chahiye");
});*/
// ye code server bana ke dega aur usko save kar diya 
// const server pe
const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.end("Hello Duniya");
    }
});
 
server.listen(3000);