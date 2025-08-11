const http = require('http');
// using this http package we can
// create our own server

const myserver = http.createServer(function(req,res){
    console.log(req.headers)
    //console.log('New Request Received');
    // whenever we request on our web server,our server will say hello
    res.end('Hello from server');
    // we can send anything from this line ..img,html(Server side endering)
});
// this will create a webserver for me
// jab bhi koi incoming request aati hai humare server
// ke upar then it will run the callback function 
// this function is responsible for processing  incoming functions
// first argument -> req -> object containing all info abt req
// second argument -> response

// we need a port to run this server
myserver.listen(3000,function(){
    console.log("server started");
});
//   