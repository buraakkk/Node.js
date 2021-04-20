const express = require("express");
const expressHandlebars = require("express-handlebars");
const server = express();

server.use(express.json());

server.set("view engine", "handlebars");
server.engine("handlebars", expressHandlebars({ defaultLayout: false }));

server.get(`/`, (req, res) => {
  res.render(`index`);
});


server.post(`/weather`, (req, res) => {
  const { cityName } = req.body;
  res.send(cityName);
});

server.listen(3000);

// https://github.com/ericf/express-handlebars/tree/master/examples/basic
// the link that i benefit from
