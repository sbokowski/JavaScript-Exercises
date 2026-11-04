// Exercise 
// JavaScript Nested array
// 
// a nested array is simple an array
// inside another array.
//  Let's walk through this example
// 
// you can think of it as a list containing
// smaller lists. This is usefull  for 
// orgainizig related informatino, such as
// names , products , scores, or tables
// 
//  
// Creating a nested array
// 
let students = [
  ['Bill', 'Davis', 'Samuel'],
  ['Debbie', 'Charlotte', 'Mary'],
  ['Anne ', 'Jackson','Maya']
];

console.log(students);

// ONe main array called students
// Three small arrays inside it
// each smaller array contains three names

// Accessing nested array elements
// you use 2 sets of square brackets to
// access an item

let customers = [
   ['Dave', 'Hamy', 'Cheezy'],
   ['Don', 'Bro', 'Chic'],
   ['Ann', 'Jope', 'Hines']
]

console.log(customers[0],[0]);
console.log(customers[0][1]);
console.log(customers[1][2]);

// output 
// Dave  
// Ham
// Chic

// How does this work?
// - [0] selects the first inner array.
// - [0][0] selects the first name in the first inner array.
// - [1][2] selects the third name in the second inner array.
// Remember: JavaScript array indexing starts at zero.
