
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

function getRandomElement(array) {
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

const randomSubject    = getRandomElement(subjects);
const randomPunchlines = getRandomElement(punchlines);


function drawCard(subject, punchline ) {
const cardData = `${subject} is great to ${punchline}`;
return cardData;
}

const card = drawCard(randomSubject, randomPunchlines);

// Compile the card using the compile method
const template = Handlebars.compile('{{card}}');

// execute the compiled template and print the output to the console
console.log(template({ card }));


