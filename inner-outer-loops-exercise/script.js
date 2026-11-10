// Exercise 
// JavaScript; 0
//  
// In JavaScript, loops allow you to repeat a block
// of code multiple times with out haveing to
// writ the same instruction over and over.
//
//
//  A nested for loop is simply a for loop inside
// another forf loop
// 
// The main thing to consider is that the inner
// loop runs completely every time the outer
// loop runs once.

// Basic example
// 
// The for loop lets you repeat code. an  array
// stores multiple values in one varialbe
//  
// 
// 
// 
// Understanding nested for loops
//
// Game design array 
   
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2 ],
];

// Example, of nested for loop here. Interesting
// part is that the outer  loopp counts upward,
// while the inner loop counts downward by 2
//
for (let i = 0; i <= 10;  i++) {
console.log('OUTER LOOP;', i);
for (let j =  10; j >= 0; j -=2) {
  console.log(' INNER LOOP', j)
  }
} 
// how does it work
// outer loop (i)
// starts at ()
// increase by 1 each time (i++)
// stops after reaching 10
//
// Inner loop (j)
// starts at 10 
// decreased by 2 each time (j -=)
// stops when it reaches 0
// 
// OUT put 
// 
// OUTER LOOP: 0
// INNER LOOP: 10
// INNER LOOP: 8
// INNER LOOP: 6
// INNER LOOP: 4
// INNER LOOP: 2
// INNER LOOP: 0

// OUTER LOOP: 1
// INNER LOOP: 10
// INNER LOOP: 8
// INNER LOOP: 6
// INNER LOOP: 4
// INNER LOOP: 2
// INNER LOOP: 0

// OUTER LOOP: 2
// INNER LOOP: 10
// 
