const express = require('express');
// This doens't have to be installed because it's native to node. AKA included in Node package.
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true})); 

app.get('/', (req, res) => {  
  // Serving up the HTML file to the client
  res.sendFile(__dirname + '/index.html');
})

app.post("/", function (req, res) {
  const APIkey = '0d0a69d8d0ae7a08aa77ad1824bc561f';
  // Grabbing user input from HTML form
  const city = req.body.cityName;
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid='+ APIkey + '&units=metric';
  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=0d0a69d8d0ae7a08aa77ad1824bc561f&units=metric/';

  https.get(url, (response) => {
    // Printing status code tells if the get request was successful.
    // console.log(response.statusCode);
    
    response.on('data', function(data){
      // For our use, parse the data and convert into JSON format
      const info = JSON.parse(data);
      // console.log(info);

      // JSON.stringify(data) will instead compact the JSON data into a single string in an object.
      // console.log(JSON.stringify(info));
      
      const temperature = info.main.temp;
      const description = info.weather[0].description;
      const icon = info.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write(`<h1>${city}</h1>`);
      res.write(`<h3>Temperature: ${temperature} </h3>`);
      res.write(`<p>Description: ${description}</p>`)
      res.write(`<img src=${imageURL} alt='weather icon'/>`)
      res.send();
    });
  })

})


app.listen(PORT, function() {
  console.log("Server is up and running on Port 3000");
})