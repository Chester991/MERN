const mongoose = require('mongoose');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

// Connection
mongoose
    .connect('mongodb://127.0.0.1:27017/database-name-1') // Pass the url of database/name-of-the-database
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("Error Connecting", err));

//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true, // agar hum first name nhi denge toh puri entry insert nahi hogi
    },
    lastname: {
        type: String,
        required: false, // last name nahi diya to bhi dusri entries insert ho jaegi
    },
    email: {
        type: String,
        required: true,
        unique: true, // same email id mere email me multiple times nahi honi chahiye
    },
    jobTitle: {
        type: String, // if we dont set required manually it is set to false by default
    },
    gender: {
        type: String,
    },
});

// Model 
const User = mongoose.model('user', userSchema); // name of model is user and we are using userSchema
// using this user object we can interact with mongodb

// Routes
app.post("/api/users", async (req, res) => {
    const body = req.body;
    if (!body
        || !body.firstName
        || !body.lastname
        || !body.email
        || !body.gender
        || !body.jobTitle
    ) { 
        return res.status(400).json({ msg: "All fields are required" }); 
    }

    try {
        const result = await User.create({
            firstName: body.firstName,    
            lastname: body.lastname,
            email: body.email,
            gender: body.gender,
            jobTitle: body.jobTitle       
        });

        console.log("result", result);
        return res.status(201).json({ msg: "success", user: result }); // Fixed: use 'res' instead of 'response'
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ msg: "Error creating user", error: error.message });
    }
});

// Optional: Add a GET route to retrieve users
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ msg: "Error fetching users", error: error.message });
    }   
});

app.get("/users" , async (req,res) => {
    const alldbusers = await User.find({});
    const html = `
    <ul>
      ${alldbusers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});