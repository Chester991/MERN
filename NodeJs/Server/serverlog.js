const http = require("http");
const fs = require('fs');
const url = require('url');

const myserver = http.createServer(function (req, res) {
    const log = `${Date.now()} : ${req.url} New Request Received\n`;
    const myurl = url.parse(req.url, true);
    console.log(myurl);
    fs.appendFile('log.txt', log, function (err, data) {
        if (myurl.pathname == "/") {
            res.end("HomePage");
        }
        else if (myurl.pathname == "/about") {
            res.end("My name is Bi  llli i like cats");
        }
        else {
            res.end("404 Not Found");
        }
    }); 
});

myserver.listen(3000);