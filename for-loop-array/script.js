// Exercise 
// JavaScript; 
//  
// In JavaScript, loops allow you to repeat a block
// of code multiple times with out haveing to
// writ the same instruction over and over.
//
// For example, instead of writing consol.log ()
// 5 times ,we can use a loop to do it automatically
// 
// 
// For loops and Arrays

// These two concepts work together very often
// in Javscript
// 
// The for loop lets you repeat code. an  array
// stores multiple values in one varialbe
//  
// When you combine them. you can go through
// an array and do something with each item
// 
// Understanding an array
//
const vegetables = ["Brocolli", "Turnips" , "Squash", "Carrots"];

console.log(vegetables);

// An array stores mulitiple values in a ordered
// list 
// Each item has an index(position) , starting 
//. at 0
// 
// index / value 
// 0 would brocolli 
// 1 will be turnips
// 2 will be Carots
//
// we can access indivual items
console.log(vegetables[0]); // brocolli
console.log(vegetables[1]); // turnips
console.log(vegetables[2]); // squash

// Useing a for loop with an array
// 
// instead of manually printing every fruit
// we can use a loop

const vegy = ['Brocolli', 'Turnips', 'Squash', 'Carrots'];

for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}
// output is 
// 'Brocolli'
// , 'Turnips', 
// 'Squash', 
// 'Carrots
