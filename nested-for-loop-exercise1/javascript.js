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
for (let i = 1; i <= 3; i++) {

  console.log('Outer loop' , i);

 for(let j = 1; j <= 3; j++) {
  console.log('Inner loop; , j');
   }
 }

// output
// Outer loop: 1
// Inner loop: 1
// Inner loop: 2
// Inner loop: 3

// Outer loop: 2
// Inner loop: 1
// Inner loop: 2
// Inner loop: 3

// Outer loop: 3
// Inner loop: 1
// Inner loop: 2
// Inner loop: 3
//
// How it works 
// Outer loop (i)
// i = 1
// inner loop
// j = 1
// Inner loop
// j = 3
// inner loop 
// j = 1
// 
// Practical example mulitply table
//
// Nested loops are useful for creating
// multiplication table 
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j<= 5; j++) {

     console.log(i +  ' x '+ j + '=' + (i * j));

  }
}

// This produces multiplication results from
//  1 × 1 through 5 × 5.

//
