//
// Exercise 
// JavaScript; 
//  
 //Javascript example 
 // 
 // Intro to javascript functions:
 //
//  we are moving into another part of 
//  javascript, functions

// Besides arrays, objects , for loops,
// for ..of , and while loops, functions bring
// those concepts together because they let 
// us write re-usable blocks of codes
//
// Think of a function as a small machine 
// give it instructions , it performs a
// a task , it can give you a result 
// example
// { } -curly brace 
//
 // Get a number 0 to 5
 // mind on logic or not for 
 // every time we roll dice , code runs
 // 
 // function-dice-roll
 // Will not run unless we execute it

function rollDice () {
   let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolling : ${roll}`);
}
// output 
// Rolling: 4

// - Math.random() generates a random decimal 
// between 0 (inclusive) and 1 (exclusive).
// - Math.floor() rounds a number down to the 
// nearest whole number.
// - * 6 gives us a range suitable for a six-sided die.
// - + 1 makes the result range from 1 to 6.
