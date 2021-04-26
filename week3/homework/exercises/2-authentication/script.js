/**
 * 2. Authentication
 *
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
const fetch = require("node-fetch");

async function printBooks() {
  // YOUR CODE GOES IN HERE
  const credential = `YWRtaW46aHZnWDhLbFZFYQ==`;
  try {
    const res = await fetch(
      "https://restapiabasicauthe-sandbox.mxapps.io/api/books",
      {
        headers: { Authorization: `Basic ${credential}` },
      }
    );
    console.log(await res.json());
  } catch (error) {
    console.log(error.message);
  }
} 
printBooks();

// I used this website (https://www.base64encode.org/) to convert  the following credentials to base64 encoding:
// admin:hvgX8KlVEa
// YWRtaW46aHZnWDhLbFZFYQ== this is base64 encoding which i used to set the Authorization header.
