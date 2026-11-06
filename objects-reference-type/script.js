// Exercise 
// JavaScript; 
//  
// In JavaScript, nested objects and arrays
// means placing an object inside another
// object , an array inside an object, or
// objects inside arrayis
// 
// This is useful when organizing more complicated
//  information, such as users, products,
// 
//  
// 
// working with 
// 
// Example:
//
//
// create nested array and objects
// makes the student object and average 
// calculation meaningful.
const student = {
  gradeScore: 'High',
  subject: 'English',
  quarter: ['incomplete', 'complete'],
  reference: {
    age: 24,
    year: 2022,
  }
};

// Calculate the average of age and year
const avg = (student.reference.age + student.reference.year) / 2;

console.log(avg); // 1023

// makes the student object and average calculation
//  meaningful.
// exampe
const students = {
  name: 'Bob',
  subject: 'English',
  quarter: ['incomplete', 'compleat'],
  reference: {
    testOne: 85,
    testTwo: 95,
  }
};

const avgScore = (students.reference.testOne + students.reference.testTwo) / 2;

console.log(avgScore);

// What you're learning here:
// - Nested objects: student.reference
// - Accessing properties: .testOne and .testTwo
// - Arithmetic using object properties.
// - Storing calculated results in a variable.
