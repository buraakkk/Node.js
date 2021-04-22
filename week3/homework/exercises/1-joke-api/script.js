/**
 * 1. Chuck Norris programs do not accept input
 *
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console.
 * Make use of `async/await` and `try/catch`
 *
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */

function printChuckNorrisJoke() {
  // YOUR CODE GOES IN HERE

  const express = require("express");
  const axios = require("axios");
  const app = express();
  app.get("/", function (req, res) {
    axios
      .get("http://api.icndb.com/jokes/random/")
      .then((response) => {
        console.log("The random joke id;", response.data.value.id);
        console.log("The random joke;", response.data.value.joke);
      })
      .catch((error) => {
        console.error(error.response.status);
        res.status(500);
        res.send("Oops");
      });
  });
  app.listen(3000);
}
printChuckNorrisJoke();
