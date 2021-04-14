/**
 * Exercise 3: Create an HTTP web server
 */

var http = require("http");

//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
	// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework 
	// I took advantage of above link while writing my code.
  const fs = require("fs"); //fs module provided by Node.js, roughly similar to imports
  // the first if condition
	//The following lines deal with fixing the request URL if it does not specify a file. 
	//For example, if the URL sent is http://localhost:3000, it will be interpreted as http://localhost:3000/index.html.
  if (req.url === "/") {
    fs.readFile("./index.html", "utf8", (err, data) => {
      // https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_fs_readfile_path_options_callback this is the link that i learn fs read file concept
      if (err) {
        throw err;
      } else { 
				// Finally, if there are no errors, we send over the requested file.
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
    // the second if condition
  } else if (req.url === "/index.js") {
    fs.readFile("./index.js", "utf8", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(data);
        res.end();
      }
    });
    // the third if condition
  } else if (req.url === "/style.css") {
    fs.readFile("./style.css", "utf8", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(data);
        res.end();
      }
    });
  }
   // Ends the response
});

server.listen(3000); // The server starts to listen on port 3000
