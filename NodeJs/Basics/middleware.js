const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("middleware chala");
    next();
    // request ko forward karne ke liye 
    // next include nahi kiya to request aage nahi badhega
    // run next()
}); 

app.get("/",function(req,res){
    res.send("miamm")
})

app.get("/about",function(req,res){
    res.send("about page hai ye")
})

app.listen(4000);


// jitne bhi request aayengi har request se
// pehle ise chalao
// aap url pe kuch bhi likho pehle ye chalega phir url chalega 