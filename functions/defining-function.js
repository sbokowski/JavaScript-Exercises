 //Javascript example 
 // 
 // Intro to javascript functions:
 //
//  we are moving into another part of 
//  javascript, functions
// 
// Math.random( )
// - Math.random() generates a random decimal 
// between 0 (inclusive) and 1 (exclusive).
// - Math.floor() rounds a number down to the 
// nearest whole number.
// - * 6 gives us a range suitable for a six-sided die.
// - + 1 makes the result range from 1 to 6.

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

  function throwDice() {
    rollDice();
     rollDice();
      rollDice();
     rollDice();
  }
  
}

// Example:
// Ok, nice example, we are working with functions inside
// functions, along with generating random dice roll.
// there are a few things to correct 
//
// we can break it down
// Our code:
function xrolldie() {
  let xroll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolling: ${xroll}`);

   function xrollDice () {
    xrollDice();
    xrollDice();
    xrollDice();
    xrollDice();
   }
}

// next, problem with the code.
// 
// there are three items to notice.
// 
// Problem 1: variable name mismatch
// 
// let xroll = Math.floor(Math.random() * 8 + 1);
//
// Problem 2: Function names have to match
// 
// Problem 3: Your functions aren't being executed.

// You defined two functions, but you never call the 
// outer function. Also, the inner function needs
//  to be called.
