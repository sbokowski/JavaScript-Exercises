 // Intro to Javascript Arguments 
 //
 // Functions : arguments and paraments
 // 
//  As of the moment , some of our functions 
// dont get ir acceot any imput 
 //
 // Alright, we're moving into another part of 
 // Javascript functions: parameter and arguments
 //
 // the basic idea is that you can give a function
 // info to work with instead of having it 
 // always perform simlar jobs.
 // 
// 1. what are parameters ?
// 
// a parameter is a variable that you put inside 
// the parenthesis when defining a function
// Example:

// funtion greet(name) {
//     console.log(`hello , ${name}!`);
// }
// greet('"Johnny");
//
// output
// Hello, Johnny !
// 
// Review , understand above example
//
// function greet(name) defines a function
// name is the parameter
// greet("Johnny") calls the function
// "Johnny" is the argument.
//
// Recap the following 
// 
// Parameter = placeholder in the function definition
// Argument = actual value you pass into the 
// function
// 
// Example:  Using mulitple arguments
//
 function addNumbers(x, y) {
   console.log( x + y);
 }

 addNumbers(10, 20);

 // output   30
// 
// Heres what happens 
// parameter        argument
// x                 10
// y                 20

// So, Javasript assigns the arguments to the
// matching parameters 
// 
// Exercise:
//
// what will the code print?
//
function mulitply(a, b) {
  console.log(a * b);
}

mulitply(5, 2);

// output 
//  10  
//  so 5 multiplied by 2 equals 10
