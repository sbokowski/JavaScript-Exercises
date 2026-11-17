 Functions : the return statement
//
//  The return stateement in Javascript is simple
// once you understand what iit does.
// 
// Think of return as a function giving back to you
// so you can use it somewhere else.
//
//example :
// without return
// 
// function addNumbers(a + b ) {
// console.log( a + b)}
// addNumbers(10, 5)
// 
// Using return
// 
// function addNumbers(a , b) {
//      return a + b;
// }
// addNumbers(12, 9);
// 
// This function calculates 10 + 5 and returns 15.

// However, you won't see anything in the console unless you 
// display the result:
// we have learned how to pass arguments into
// functions . Now lets learn how to get info
// back out of them
// Example : return statement

// using return in calculations
// lets build on your previou example
// using division  in sample

function myDivsion(a, b) {
  return a / b;
}
let result = myDivsion(100, 5);

console.log(result);

// output
20;

// another example
function myXdision(a, b) {
  return a / b;
}
let xresult = myXdision(25, 5);

console.log(xresult);

//
// another example
function myYmuliply(a, b) {
  return a * b;
}

console.log(myYmuliply);
