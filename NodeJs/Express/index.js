const http = require('http');
const express = require('express');

const app = express();
// app is initialized and we can do anything with this app
// app is handler function (server code)

app.get("/",function(req,res){
    return res.send("Hello From Home Page " );
});

app.get("/about",function(req,res){
    return res.send("This is about me page" + ' hey ' + req.query.name);
});

app.listen(3000);


// const myserver = http.createServer(app);

// myserver.listen(8000);