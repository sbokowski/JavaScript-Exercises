// Exercise 
// Methods 
//split 
//  JavaScript split() is a string method used to 
//  divide a string into smaller pieces and return 
//  them as an array.

// It is particularly useful when you want to separate
//  words, names, numbers, or other text.
// Examples 
//

// using split ()
string.split(separator, limit);

// separator : what character or pattern to split at.
// limit Optional .Max number of pieces  to return.

// Split a string  by space

let mainIdea = 'Python programming is challenging';

let words = mainIdea.split(" ");

console.log(words);

let robots = ['arm', 'spare parts', 'battery', 'head', 'leg', 'body'];

let human = robots.slice(0, 3);

let mammals = robots.slice();

console.log(human);
console.log(mammals);
