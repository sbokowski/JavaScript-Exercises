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
// The infinite loops

// An infinite loop is a loop that continues running
// forever because its stopping condition  is
// never reached
// 
// Normally loops repeat code a certain number
// of times or until a condition becomes false.
// an infinite loop doesnt stop on its 
//  
// Working with  JavaScript loops 
// repeating code 
// 
// Example:
// How do we repeat code 
// Infinite loops 
//
// This loop will go on , till you stop 
// CAUTION ... you have to comment it out
// or change it to stop
//
// Creat an infinite loop 
// for(let i = 1; i !== 20 ; i +=2 ) {
//   console.log(i);
// }
// 
// Try changing it to:
// this will stop at. 19
for (let i = 1; i <= 19; i += 2){
  console.log(i);
 }
// 
// What happens?
// 1. JavaScript keeps executing the loop.
// 2. It continuously generates numbers.
// 3. console.log() keeps writing to the browser console.
// 4. The browser's JavaScript execution thread stays busy.
// 5. Eventually, the tab may become unresponsive.
// It can consume significant CPU resources and memory.
// 
// starts at 1 
// adds 2 each time
// eventually reaches 19
// then reaches 21 
//  then 23, 25, 27, and keeps going 
// 
// why doesnt it stop.
// 
// Because i !== 20 means keep going as long
// as i is not equal to 20
// Since i is always an odd number, it will 
// never equal 20.
