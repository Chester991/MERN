const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

app.use(express.json());

let finaldata;

app.get('/weather', async (req, res,cityname) => {
    const datapromise = axios.get(`http://api.weatherapi.com/v1/current.json?key=28b587cb31934dfb992173332250808&q=${cityname}&aqi=yes`);
    const citydata = await datapromise;
    finaldata = citydata.data.location;
});

button.addEventListener("click", () => {
    
})

app.get('/', (req, res) => {
    res.send('Hello World! Visit /weather to test your endpoint.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Test your endpoint at: http://localhost:${port}/weather`);
});