const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Your route handler (converted from router to direct route)
app.get('/users', async function (req, res, next) {

    try {
        // Query database (mongodb with incoming userId)
        const todoresponsepromise = axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(todoresponsepromise);
        const todoresponse = await todoresponsepromise;
        console.log(todoresponse.data);
        console.log((await todoresponsepromise).data);

        console.log("second data is here/n/n/n");


        const userpromise = axios.get('https://jsonplaceholder.typicode.com/users/1');
        const userdata = await userpromise;
        console.log(userdata.data);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Billi kharab hai');
    }

    res.send('OK');

    /*axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((billi) => {
            axios.get('https://jsonplaceholder.typicode.com/users/1')
                .then((insideBilli) => {
                    axios.get('https://jsonplaceholder.typicode.com/users/2');
                    console.log(insideBilli.data);
                    console.log("Inside Users");
                    res.send('Processed User');
                })
                .catch((err) => {
                    console.log('Error in users request:', err);
                    res.status(500).send('Error processing user request');
                });
            console.log("Inside TODO");
            console.log(billi.data);
        })
        .catch((err) => {
            console.log('Error in todos request:', err);
            res.status(500).send('Error processing todo request');
        });*/
});


// Basic root route
app.get('/', (req, res) => {
    res.send('Hello World! Visit /users to test your endpoint.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Test your endpoint at: http://localhost:${port}/users`);
});