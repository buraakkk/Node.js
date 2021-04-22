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

async function printChuckNorrisJoke() {
  // YOUR CODE GOES IN HERE
  const fetch = require("node-fetch");
  const randomJoke = 'http://api.icndb.com/jokes/random';
  try {
    const res = await fetch(randomJoke);
    //console.log(await result.json());
    console.log('Here is the joke:',(await res.json()).value.joke);
  } catch (error) {
    console.log('Here is the joke:',error);
  }
}
printChuckNorrisJoke();

// Here is the link that i learnt node-fetch package and benefit to make the homework.
//https://www.npmjs.com/package/node-fetch 