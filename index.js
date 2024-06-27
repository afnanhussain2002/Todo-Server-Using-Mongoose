const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const port = 5000;

// Middleware
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wpyq7sp.mongodb.net/?appName=Cluster0`; // Replace with your MongoDB URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 2000
  })
  const db =mongoose.connection
  db.on('error', err => {
    console.log('Connection error:', err);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('Learn mongoose!');
});
app.listen(port, () =>{
  console.log(`Server is running on port ${port}`);
})

