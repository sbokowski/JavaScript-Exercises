// Exercise 
// JavaScript; 
//  
// IN javascript, for , ..of and for ..in are
// both loops , but do different thngs.
//
//  The easiest way to remember them;
// for ..uses  an. index (i) to access array items
// for .. of  retrieves each array item directly
// 
 //Javascript example 
 // loop using a break statement 
 // 
 // Javascript fo loop using a break statement. the
 // break tells javascript to stop the loop immediately
 //  when a particular condition is met
 // 
// We can walk though it
// loop with break 

// 
// 
// example

for (let i = 0; i < 10; i ++) {
    console.log(i);
	if (i === 3) {
		break;
	}
}
 // How this works 
 for (let i = 0; i < 5; i ++) {
	console.log(i);
	if (i == 5) {
		 break;
	}
 }



 // how it works , step by step
 // 1. i = 0 - start the counter at zero
 // Next ,  i < 10 - keep running as long as 
 // i is less than 10
 // next, i ++ increase i by 1 afer each loop
 // next, console.log() dislay the current number
 // then , if (i== 5) check whether the counter
 // has reached 5 
 // finally - stop the loop immediately 

 // output
//  0 
//  1 
// 2 
// 3
//  4
//  5

// something to remember 
// 
// javascript has two useful loop control statement
// - break - completely exits the loop
// continue - skip the current iteration / moves to
// the next one

// A good next exercise: Try changing i === 5 to i
//  === 3 and see what happens.
