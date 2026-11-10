// Exercise 
// JavaScript; 
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
// When you  combine them. you can go through
// an array and do something with each item
// 
// Understanding nested for loops
//
// 
// const gameboard = [
//   [ 4, 33,8, 4],
//   [ 64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2]
// ];

// If you want the inner loop to count from 
// 5 to 10:
for (let i = 1; i <= 10; i++ ) {
  console.log('OUTER LOOP;',i);

  for (let j = 5; j <= 10; j++) {
  console.log(' INNER LOOp;', j);
  }
}
// How it works 
// The outer loop (i) starts at 1 amd
// runs till f10
// Each time the outer loops run - inner 
// loop (j) starts again at 5.
// The inner loop counts from 5 to 10
// Finally the inner loop finishes the outer
// loop , to its next number.
