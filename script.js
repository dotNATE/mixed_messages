// Message components
const suspects = ["Miss Scarlett", "Reverend Green", "Colonel Mustard", "Professor Plum", "Mrs Peacock", "Mrs White"];
const rooms = ["Kitchen", "Ballroom", "Conservatory", "Dining Room", "Cellar", "Billiard Room", "Library", "Lounge", "Hall", "Study"];
const weapons = ["Candlestick", "Dagger", "Lead Pipe", "Revolver", "Rope", "Wrench"];

let randomiser = (array) => array[Math.floor(Math.random() * array.length)];

console.log(`It was ${randomiser(suspects)} in the ${randomiser(rooms)} with a ${randomiser(weapons)}!`);