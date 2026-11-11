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
// this code nested for loops to go through
// a two dimensional array - an array  contains
// other arrays
// 
// thik of a gameboard as 4 x 4 game grid,
// similar to the number layout in the game 2048
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2 ],
]; 

for(let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];

  console.log('OUTER LOOP;', row);

  for (let j = 0 ; j < row.length; j ++) {
  console.log('INNER LOOP;', row[j]);
  }
}

// What happens?
// - i = 0 starts at the first row.
// - gameBoard.length is 4.
// - i++ increases the counter by 1.
// - gameBoard[i] retrieves the current row.
// - console.log(row) prints that entire row.
// So the outer loop goes through all four rows.

