const express = require('express');
const users  = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded ({extended : false}));

// Routes
app.get('/api/users' , function(req,res){
    return res.json(users);
});

app.get('/users' , function(req,res){
    const html = 
    `
    <ul>
    ${users.map(user => `<li> ${user.first_name} </li>`).join("")};
    </ul>
    `
    return res.send(html);
});


app.get('/api/users/:id' , function(req,res){  // id kuch bhi ho sakta hai 
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user.email);
});
