const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/api/users', function (req, res) {
    return res.json(users);
});

app.get('/users', function (req, res) {
    const html =
        `
    <ul>
    ${users.map(user => `<li> ${user.first_name} </li>`).join("")};
    </ul>
    `
    return res.send(html);
});


app.get('/api/users/:id', function (req, res) {  // id kuch bhi ho sakta hai 
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user.email);
});

app.post('/api/users', async function (req, res) {
    //Create new user
    const body = req.body;
    console.log(body);
    const newUser = {
        ...req.body,
        id: users.length + 1
    };
    users.push(newUser);
    fs.writeFile('../Project-1/MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) res.send("Something billiiii");
        fs.writeFile('../Project-1/Billi_DATA.json', JSON.stringify(users), (err, data) => {
            if (err) res.send("Something billiiii");
            else {
                console.log(data)
                res.send("OK");
            }
        })
    });

    let data = await fs. writeFile('../Project-1/MOCK_DATA.json', JSON.stringify(users));
    let newdata = await fs. writeFile('../Project-1/BILLI_DATA.json', JSON.stringify(users));
    res.send('ok');
    console.log('hi');
});

// app.patch('/api/users/:id' ,function(req,res){
//     //Edit the user with id
// });

// app.delete('/api/users/:id' ,function(req,res){
//     //Delete the user with id
// });

// we are performing three operations on the same route 
// we can merge them 

// app.route('/api/users/:id')
// .get('/api/users/:id',(req,res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user.email);
// })
// .post((req,res) => {})
// .patch((req,res) => {})
// .delete((req,res) => {});


app.listen(8000);