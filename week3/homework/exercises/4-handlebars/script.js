
/**
 * 4. Fun with Handlebars
 * 
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 * 
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */

// Install and require Handlebars. Note that it's just handlebars, not express-handlebars
 const Handlebars = require("handlebars");

 const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

function drawCard(subjectArray,punchlineArray) {

  //get random subject and punchline
  const randomSubject    = getRandomElement(subjectArray);
  const randomPunchlines = getRandomElement(punchlineArray);

  //create cardData as an object
  const cardData = {
    subject: randomSubject,
    punchline: randomPunchlines
  };

  //compile the template into a function
  const card = `{{subject}} is great to {{punchline}}.`;
  const template = Handlebars.compile(card);


  //render the template
  const result = template(cardData);
  console.log(result);
}

drawCard(subjects,punchlines);

//https://www.npmjs.com/package/handlebars while creation of drawCard function, i benefit from that link.
//source is card and data is cardData in our example.




