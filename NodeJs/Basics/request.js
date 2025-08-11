const express = require('express');
const app = express();

app.get("/", function (req, res, next) {
    res.send("This is home page")
})

app.get("/about", function (req, res, next) {
    res.send("This is about page");
})

app.get("/profile", function (req, res, next) {
    //res.send("This is profile page");
    return next(new Error("Not implemented"));
})

//Error Handling :-
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000);