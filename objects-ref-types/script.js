// Exercise 
// JavaScript; 
//  
In JavaScript, objects are reference types.
this is an important concept , because
it explains how Javascript stores objects
in memory and what happens when you 
copy , modify or assign them to another 
variable. 
// 
// We can break it down this way.
// 
// 1. What's is an object 
// 
//  An object stores related info using key
// value pairs also named properties 
// 
//  
// Working with  JavaScript 
// 
// Example:
//
//
// Learn  objects and refererence types
const agent = {
name: 'Sparky',
version: 23.3,
maker: 'SpaceY'
};

console.log(agent.name);
console.log(agent.maker);

// output 
// Sparky
//  SpaceY

// agemt is the object
// name , version are properties
// Sparky, 23.3 , SpaceY are values

// How to make a separate copy of a 
// object 
// you can use the spread operator (...)
// to create a shallow copy

const person1 = {
    name: 'Don',
    age: 29
};

// make a copy
const person2 = { ...person1 };

person2.age = 45;

console.log(person1.age); // 29
console.log(person2.age); // 45
