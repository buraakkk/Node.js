/**
 * 2. Authentication
 *
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
  
 async function printBooks() {
    // YOUR CODE GOES IN HERE
  const fetch = require('node-fetch');
   try {
     const res = await fetch("https://restapiabasicauthe-sandbox.mxapps.io/api/books", {
       headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
     });
     console.log(await res.json());
   } catch (error) {
    console.error(error);
   }
 }
 printBooks();


 // I used this website (https://www.base64encode.org/) to convert  the following credentials to base64 encoding:
 // admin:hvgX8KlVEa
 // YWRtaW46aHZnWDhLbFZFYQ== this is base64 encoding which i used to set the Authorization header.