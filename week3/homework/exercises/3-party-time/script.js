
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

// Which methods are available (GET or POST)? Answer: post 
// What is the route? Answer: /reservations
// What headers are expected? Answer: `Content-Type` to `application\\json`
// What should the request body contain, and how it should be formatted? 
// Answer: { name: 'John Doe',numberOfPeople: 3,}  JSON
// Base URL: https://reservation100-sandbox.mxapps.io/api
// Path: https://reservation100-sandbox.mxapps.io/api/reservations

async function makeReservation() {
  // YOUR CODE GOES IN HERE
  const fetch = require('node-fetch');
  // https://www.npmjs.com/package/node-fetch --i make use of "Post with JSON" in this link.
  const body = {
    name: 'Burak',
    numberOfPeople: 2,
  };

  try {
    const res = await fetch("https://reservation100-sandbox.mxapps.io/api/reservations", {
      //the following three lines are cited from https://www.npmjs.com/package/node-fetc
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(await res.json());
  } catch (error) {
    console.error(error);
  }
}
makeReservation();



