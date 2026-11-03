// Exercise
// 
 // In Javascript , reference types are data types that store a 
// reference to an objext in memory rather than storing the
// actual object value in the variable
//
// there is an important concept when working with arrays, objects 
// and functions
//
// 1. Primitive types vs. reference types
// JavaScript has two broad categories of values.
 // Primitive   and Referenice types 
//  strings to object , number to array
// boolean to function , undefined to data
// null to object , Bigint
 // primitive type hold individual values
// example
let x = 30;
let name = 'James';
let isActive = true;

console.log(x);
console.log(name);
console.log(isActive);
// reference types
let animal = ['Bulldog', 'Shepard', 'Sparrow'];

let person = { 
    name:'Harry', 
    age: 39
}

// Understanding  reference types
// Here is a example
let animals = ['dog' , 'rat', 'cat' , 'monkey' ];
let pets = animals;

pets.push('rabbit');

console.log(animals);
console.log(pets);
