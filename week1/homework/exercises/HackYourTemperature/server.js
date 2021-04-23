const express = require("express");
const axios = require('axios');
const expressHandlebars = require("express-handlebars");
const server = express();

server.use(express.json());

server.set("view engine", "handlebars");
server.engine("handlebars", expressHandlebars({ defaultLayout: false }));

server.get(`/`, (req, res) => {
  res.render(`index`);
});

// For it to work we first have to add the API Key, like so:



server.post(`/weather`, (req, res) => {

  const API_KEY = require('./sources/keys.json').API_KEY;
  const { cityName } = req.body;

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`)
   .then(response => {
    res.render('index', { weatherText: `The temperature in ${cityName} is ${response.data.main.temp}°C!` })
  })
  .catch(error => {
    res.render('index', { weatherText: "City is not found!" })
  })

});

server.listen(3000);

// https://github.com/ericf/express-handlebars/tree/master/examples/basic
// the link that i benefit from
