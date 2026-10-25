// Exercise
// Switch operator,
// Switch statement
// Javascript
// 
// In JavaScript, a switch statement is used to run
//  different blocks of code depending on the value of a 
//  variable or expression.
//
// It is useful when you have multiple possible values 
// to check and want to perform
//  a different action for each one.
// Example: 

// 
//  
let day = 2;

if (day === 1) {
   console.log("Monday");
}
else if (day === 2) {
  console.log("Tuesday");
}
else if (day === 3) {
  console.log("Wedesday");
}

else if (day === 4) {
  console.log("Thursday");
}

else if (day === 5) {
  console.log("Friday");
}
else if (day === 6) {
  console.log("Sauturday");
}
else if (day === 7) {
  console.log("Sunday");
}
else {
  console.log('Invalid day');
}

switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wedneday");
      case 4:
    console.log("Thursday");
}
