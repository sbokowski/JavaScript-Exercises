// Exercise 
// Methods 
//  includes()
// The JavaScript includes() method checks whether a
//  particular value or text exists inside a string 
//  or an array.
//
// It returns a Boolean value
// 
// It returns a Boolean value
// true - the value was found
// false - the value was not found.
// Example

// using includes() with strings

let message = 'We are learning Javascript';

console.log(message.includes('Javascript'));

// true , it found javascript inside
// the string

// If the string , text doesnt 
// have text , returns a false value

let getMessage = "James is learning Python";

console.log(getMessage.includes('JavaScript'));

// includes() with arrays
// we can check whether an array contains a 
// particular item.

let dogtype = ['Poodle', 'Hound', 'Shepard', 'Doberman','Mix'];

console.log(dogtype.includes('Mix'));

// Using includes() with IF/ELse

// We can use includes() to make decisions in 
// your Javascript code.

let nameTitle = 'James444';

if (nameTitle.includes('444')) {
  console.log('Username found');
} else {
  console.log('User name not found.');
}
