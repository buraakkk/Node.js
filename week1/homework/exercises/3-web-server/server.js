/**
 * Exercise 3: Create an HTTP web server
 */
const http = require('http');
const { readFileSync } = require(`fs`);

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const localHost = readFileSync('./index.html');
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(localHost);
    res.end();
  } else if (req.url === '/index.js') {
    const logic = readFileSync('./index.js');
    res.writeHead(200, { 'content-type': 'application/javascript' });
    res.write(logic);
    res.end();
  } else if (req.url === '/style.css') {
    const cssStyle = readFileSync('./style.css');
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(cssStyle);
    res.end();
  } else if (req.url === '*') {
    res.writeHead(404);
    res.end(`The page you are requesting doesn't exist!`);
  }
});

server.listen(3000); 

// resources that I benefit from
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework 
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_fs_readfile_path_options_callback