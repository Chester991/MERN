const express = require('express');
const { hiteshHaiKya } = require('../middleware/middleware');
const app = express(); // :- ye function sab kuch deta hai jo express kar sakta hai
// express.js ka pura data is variable app me hai

app.get("/",function(req,res){
    // user vslue
    res.send("Idhar Billi nahi hai")
})

app.use(hiteshHaiKya);

app.get("/comment",function(req,res){
    // actaul comment buisness logic
    res.send("Can Comment")
})

app.get("/like",function(req,res){
    // actaul fail buisness logic
    res.send("Can Like")
})

app.listen(3000);