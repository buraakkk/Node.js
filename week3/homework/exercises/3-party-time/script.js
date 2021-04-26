
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
const fetch = require('node-fetch');

async function makeReservation() {
  // YOUR CODE GOES IN HERE
  // https://www.npmjs.com/package/node-fetch --i make use of "Post with JSON" in this link.
  const reservationInfo = {
    name: 'Burak',
    numberOfPeople: 2,
  };
  try {
    const res = await fetch("https://reservation100-sandbox.mxapps.io/api/reservations", {
      //the following three lines are cited from https://www.npmjs.com/package/node-fetc
      method: 'post',
      body: JSON.stringify(reservationInfo),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
makeReservation();



/* 

JS object
const myObj = {name: "Burak", age: 27}

JSON data (prop => string) stringify() (make it string)
const myJSON = {"name": "Burak", "age": 27}




JSON data
const myJSON = {"name": "Burak", "age": 27}

JS object json()  (string => prop) json()
const myObj = {name: "Burak", age: 27}

*/


 /* 
      const reservationInfo = {
        name: 'Burak',
        numberOfPeople: 2,
        const {name} = req.body
        const {numberOfpeop} = req.body
        app.get(`/reservaition`, (req, res)=>{
        res.send(`'Dear ${reservationInfo.name} Your reservation for 2 has been registered. We look forward to seeing you at the party!')
        })
  };
       */
      //JSON.stringify(reservationInfo), => "name": "Burak", "numberOfPeople": 2,