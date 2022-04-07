// project goal, use git/github from command line to version control this project
// array to hold the random components of the message
const noun = ['Cat','Dog','Fish','Bird','Lion','Elephant','Spider','Worm','Ant'];
const verb = ['gets','eats','finds','loves','beats','teaches'];

let nounOne = noun[Math.floor(Math.random()*noun.length)];
let verbOne = verb[Math.floor(Math.random()*verb.length)];
let nounTwo = noun[Math.floor(Math.random()*noun.length)];

console.log(`The ${nounOne} ${verbOne} the ${nounTwo}`);

