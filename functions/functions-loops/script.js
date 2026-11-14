//
// Javascript exercise
//
// Good! This is a nice beginner JavaScript example
//  demonstrating functions and loops working together.

// Let's break it down.
// 1. Define the function

// STEP 1:

// Here we're creating a function named goodwife.

// think of a function as a reusable chunck of 
// code . Nothing inside the function runs until
// you call it.
//
// 2. call the funcion
//  goodWife();
//  goodWife();
//  goodWife();

// Each time you write goodWife(), JavaScript
//  executes all three console.log() statements.

// That means you get three sets of messages.

// 3. Now introduce the for loop
// for (let i = 0; i < 24; i ++) {
// 	goodWife();
// }
 
function goodWife() {
	console.log('Where is my dinner.');
	console.log('Hi honey , your home');
	console.log('How was work');
}
// step 2. call the function
goodWife();
goodWife();
goodWife();

for (let i = 0; i < 24; i ++) {
	 goodWife();
}
