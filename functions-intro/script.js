 //Javascript example 
 // 
 // Intro to javascript functions:
 //
 // we are moving into another part of 
 // javascript, functions
// 
// Besides arrays, objects , for loops,
// for ..of , and while loops, functions bring
// those concepts together because they let 
// us write re-usable blocks of codes
//
// Think of a function as a small machine 
// give it instructions , it performs a
// a task , it can give you a result 
// example
// 
// A simple Javascript function
// STEP 1: Define the function:
function grumpus() {
	console.log('ugh...you again...');
	console.log('FOR THE LAST TIME...');
	console.log('LEAVE ME ALONE!!!');
}
// STEP 2: Call the function:
grumpus();
grumpus();
grumpus();


for (let i = 0; i < 20; i ++) {
  grumpus();
}

// Basic function 
// 
function greet() {
  console.log("Hey honey, did you get the salmon");
}

// to run it, call the function 
// greet();
// More examples
function greet (name) {
  console.log('Hey, ${name}');
}

greet('June ');
greet('Barry');
greet('Kim');
