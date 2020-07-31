const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

app.get('/', function(req, res) {
  var today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0) {
    res.write(today.getDate() + "TODAY IS A WEEKEND!!! WOOOOOO");
    res.send()
  } else {
    res.write("Boo... Gotta work...");
    res.sendFile(__dirname + '/index.html');
  }
})

app.listen(3000, function() {
  console.log('Server is running on Port 3000');
})