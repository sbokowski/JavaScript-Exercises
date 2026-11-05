// Exercise 
// JavaScript; 
// 
// In JavaScript, you can add new properties
// and update existing properties in an 
// object using notation(.) or bracket 
// notation([])
// 
// We can use an object literal as an example
// 
// 
//  Adding and updating properties
// 
// Example:
// 
// creating an object 
 const individual = {
  firstName: 'Harry',
  lastName: 'Dennison',
  age: 30
 };

 console.log(individual);

 // Here ,  firstName, lastName and age 
 // are properties
 // adding a new property

 // use notation to add a propety that
 // doesnt already exist

const person = {
  firstName: 'Jon',
  age: 40
};

// add new property
person.city = 'New Haven';

console.log(person);

// updat an exiting property 

const xperson = {
    firstName: 'Hosier',
    age: 30
};

// Update age
xperson.age = 35;

console.log(xperson.age);

// out put
 35
