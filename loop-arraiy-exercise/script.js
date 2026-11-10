// Exercise 
// JavaScript; 
//  
// In JavaScript, loops allow you to repeat a block
// of code multiple times with out haveing to
// writ the same instruction over and over.
//
// For example, instead of writing consol.log ()
// 5 times ,we can use a loop to do it automatically
// 
// 
// For loops and Arrays

// These two concepts work together very often
// in Javscript
// 
// The for loop lets you repeat code. an  array
// stores multiple values in one varialbe
//  
// When you  combine them. you can go through
// an array and do something with each item
// 
// Understanding an array
//
// This JavaScript script uses a for loop to go through an array
// and display each test
// score along with its index number.
const testScores = [ 98, 77, 84, 91, 57, 66];
 
for (let i = 0; i < testScores.length; i++) {
 console.log(i, testScores[i]);
}

// example 
// this script creates an array of student objects and uses
// a for loop to display each students name and grade.
const myStudents = [
  {
    firstName : 'Zeus',
    grade : 88
  },
  {
    firtName : 'Aremis',
    grade: 78
  },
  {
    firstName : 'Zero',
    grade: 99
  },
  { 
    firstName: 'Chance',
    grade: 70
  }    
 ];

 for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log('${stidemt.firstName} scored ${student.grade}') ;
//  console.log('$ {}')
 }

 // output
//  Zeus scored 88
// Aremis scored 78
// Zero scored 99
// Chance scored 70
