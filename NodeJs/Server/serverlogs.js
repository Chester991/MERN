const http = require('http');
const fs = require('fs');
const url = require('url');

const myserver = http.createServer(function(req,res){
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} , ${req.url} New Request Received\n`;
    const myurl = url.parse(req.url,true);
    fs.appendFile("MERN/NodeJs/Server/logs.txt",log,function(err,data){
        if(myurl.pathname === "/"){
            res.end("HomePage");
        }
        else if(myurl.pathname === "/about"){
            const username = myurl.query.myname;
            res.end(`Hi ${username}`);
        }
        else if(myurl.pathname === "/search"){
            const text = myurl.query.question;
            res.end(`Here are your search results for : ${text}`);
        }
    })
    console.log(myurl); 
});

myserver.listen(4000);