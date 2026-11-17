// Javascript example
//
// Intro to return statement
//
// Functions : the return statement
//
//  The return stateement is one of the most
// important concepts to under stand when learning
// Javascript functions.

// we have learned how to pass arguments into 
// functions . Now lets learn how to get info
// back out of them

// Example : return statement 

function mySquare(num) {
    return num * num;
}
mySquare(5);

// output
// 25 

// What happens here?
// 1. We define a function called mySquare.
// 2. We pass the argument 5 into the function.
// 3. The function calculates 5 * 5.
// 4. return sends the result back to wherever the 
// function was called.

// using return in calculations
// lets build on your previou example 
 // using division  in sample

function mydivsion(a, b) {
    return a / b;
}
let result = myDivision(100, 5)

console.log (result);

// output 
20
