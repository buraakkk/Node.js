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
 const fetch = require("node-fetch");

async function printChuckNorrisJoke() {
  // YOUR CODE GOES IN HERE
  const randomJoke = 'http://api.icndb.com/jokes/random';
  try {
    const res = await fetch(randomJoke);
    //console.log(await result.json());
    const data = await res.json();
    const joke = data.value.joke;
    console.log(`Here is the joke: ${joke}`);
  } catch (error) {
    console.log(`Error message , ${error.message}`);
  }
}
printChuckNorrisJoke();

// Here is the link that i learnt node-fetch package and benefit to make the homework.
//https://www.npmjs.com/package/node-fetch 