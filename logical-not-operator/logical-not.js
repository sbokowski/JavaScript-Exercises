// Exercise
// Logical NOT Operator (!) 
// Javascript ! expression returns true if the 
// expression is false 
// Example: 
// 
// 
// 

 let loggedInUser ;

// if there isn't a logged in user

 if (!loggedInUser) { 
  console.log("Get out of here!");
 }

 let flavor = 'watermelon';

 if (flavor !== 'grape' && flavor !== 'cherry' ) {
   console.log('We dont have that flavor!');
 }

 if(!(flavor === 'grape' || flavor === 'cherriy')) {
 console.log('We only have grape and chery!');
 }
