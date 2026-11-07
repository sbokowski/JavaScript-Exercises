// Exercise 
// JavaScript; 
//  
// In JavaScript, array , object and equality
// this lesson connect  three important Javascript
// concepts: arrays , objects, and equality (===)
// 
// The key thing to understand is that array objects
// are both reference types. This affects how 
// Javascript compares them.
// 
// Comparing primitive values
// when comparing primitive values, Javascript compares
// their  actual values.
// 
//  
// Working with  JavaScript 
// 
// Example:
//
//
const a = 10;
const b = 10;

console.log(a === b); // true

// both values are 10, so the result is true
//
// another example 
// Comparing objec†s
 // objects behave differently 

const person1 = {
    name: 'John'
};

const person2 = {
    name: 'John'
};

console.log(person1 === person2); // false

//Why is the result false?

// Even though both objects contain identical information, 
// they are two separate objects in memory.

// example

const firstVisit = "January";
const secondVisit = "January";

console.log(firstVisit === secondVisit);  // true

// the strings contian the same value 
