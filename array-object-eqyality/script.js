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
// Array /object equality
//
let nums =  [1,2, 3 ];
let mystery = [1,2,3];

console.log(nums === mystery);

// output is false
// the contain the same values in
// the same order , though they 
// are different type arrays 
// 
// Why does it return false?
// Think of it this way:
// - nums creates one array in memory.
// - mystery creates a completely separate 
// array in memory.
// - Even though they contain identical 
// values, they are two different arrays.
// 
// What would return true.
// 
// if you assign one array to another
// variable . For example.
// 
let number = [1, 2, 3];

let mysteryMan = number;

console.log(number === mysteryMan); // true

