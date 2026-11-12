// Exercise 
// JavaScript; 
//  
// In JavaScript, loops allow you to repeat a block
// of code multiple times with out haveing to
// writ the same instruction over and over.
//
// Intro for of 
// 

// Unlike a for loop , which is commonly used when
// you know how many time you want to repeat 
// something , a while loop continues running as
// long as a specified condition is true
// 
//  
// Understanding for of
// 
// 
// for of:  another  example
// makae magicSquare array 
const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];


// Version using a for loop...
for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (let j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}
// the javascript code uses nested for loop  to
// calculate the sum of each row in a 2D array
// - an array containing other arrays
  
// we can break it down
// 
// 1. The magicSquare array
// const magicSquare = [
// [2, 7, 6],
// [9, 5, 1],
// [ 4, 3, 8]
// ];
// we have 3 arrays inside one larger array.
// think of it as grid
// 
// Next the outer for loop
// think of it as a grid
 // 
 // 3 rows with 3 numbers in each row
 // 
 // 2. the outer loop
//   for (let i = 0; i < magicSquare.length; i++)
//
// the loop goes through each of 3 rows 
// let i = 0 starts at index 0
//  i < magicSquare.length continues while/ with the rows
// i++ increases the index by 1 each time
// 
// remember , Javascript array indexes start at zero
// 
// 3. Getting each row 
// 
// let row = magicSquare[1];
 // let sum = 0;
 // 
 // 4. the inner for loop 
 // 
//  for (let j = 0; j < row.length; j++) {
//     sum += row[j];
// }
// 5 . Printing the result 
// 
// console.log(`$ {row } sumed to $ {sum}`);
// 
//  Above example: This uses a template literal (backticks)
//  to display the row and its total.
// 
// Much cleaner version using a for...of
for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to ${sum}`);
}

// EXAMPLE 2
// If you need the indices, use a traditional for loop!
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
	//Access index i of both arrays
	console.log(`${words1[i]}${words2[i]}`);
}
