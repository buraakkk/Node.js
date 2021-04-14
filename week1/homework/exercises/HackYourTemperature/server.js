const express = require('express');
const server  = express();
server.get(`/`, (req, res) => {
  res.send(`hello from backend to frontend!`);
});
server.listen(3000);
