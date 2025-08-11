const express = require('express');
const fs = require('fs');

const app = express();

app.use((req,res,next) , function(){
    console.log("Hello from middleware 1");
});
// If middleware wants to end the response then use the res
// next :- reference of the next middleware in stack or code
// next is pointing to the route