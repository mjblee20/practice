// Need Express body-parser and Mongoose npm packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000 || process.env.PORT;

// Connects to MongoDB database locally for now
mongoose.connect('mongodb://localhost:27017/exampleDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Starts the Node Server
app.listen(PORT, function() {
  console.log("Server is up and running on localhost:3000");
})