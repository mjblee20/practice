// Express is a Node framework, making it much easier to work with Node.js.
const express = require('express'); // ES6 module syntax equivalent of  ( const express = require('express'); )
const bodyParser = require('body-parser');

const app = express();

// req = request
// res = response
app.get('/', function(req, res) {
  // res.send can only send a string response.
  // res.sendFile will send an entire file to the browser to be rendered.

  // __dirname will give the file path of the current path regardless of where it's hosted.
  // console.log(__dirname); 
  // in my case it should return /Users/mjblee20/WorkSpace/mernPrac/backend

  res.sendFile(__dirname + "/sumCalc.html");
})


app.post('/', function(req, res) {
  var num1 = parseFloat(req.body.n1);
  var num2 = parseFloat(req.body.n2);

  var sum = num1 + num2;
  res.send('Your BMI is... dumbroll... '+ sum);
})

app.get('/bmiCalc', function(req, res) {
  res.sendFile(__dirname + "/bmiCalc.html");
})

app.post('/bmiCalc', function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight/ (height * height);
  res.send('Your BMI is... dumbroll... '+ bmi);
})

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});