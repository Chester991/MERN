// creating a module for logging messages
// we will use this module in various parts in our app

var url = "http://google.com"
// we will send a http request to this endpoint
function log(message){
    console.log(message);
}

// this variable "url" and function "log" are scoped in this program only
// we want to use this logger.js program(module) in other js program (app.js)
module.exports.log = log; 
// object we are exporting here has a method log
module.exports.url = url;

