const express = require('express');

const app = express();

app.get("/",function(req,res){
    res.send("Idhar Billi nahi hai")
})

app.get("/inside",function(req,res){
    res.send("Idhar Billi hai ......")
})

app.listen(3000);