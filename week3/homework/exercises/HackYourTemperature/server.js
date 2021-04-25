const express = require("express");
const axios = require("axios");
const expressHandlebars = require("express-handlebars");
const API_KEY = require("./sources/keys.json").API_KEY;

const server = express();

server.use(express.json());
//info coming from form as txt,don't do,just keep it as it is.
server.use(express.urlencoded({ extended: false }));

server.set("view engine", "handlebars");
server.engine("handlebars", expressHandlebars({ defaultLayout: false }));

//homePage
server.get(`/`, (req, res) => {
  res.render(`index`);
});

//after Submit  
server.post(`/weather`, (req, res) => {
  const { cityName } = req.body;
  if (!cityName){
    res.render("index", {
      weatherText: `Oops, you didn't write anything.`,
    });
    return;
  } 
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
    )
    .then((response) => {
      res.render("index", {
        weatherText: `The temperature is ${response.data.main.temp}°C! in ${cityName}.`,
      }); 
    })
    .catch((error) => {
      res.render("index", { weatherText: "City is not found!" });
    });
});

server.listen(3000, () => console.log('Server started...'));

// https://github.com/ericf/express-handlebars/tree/master/examples/basic
// the link that i benefit from
