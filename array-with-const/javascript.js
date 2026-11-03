// Exercise
// Using const with arrays
 // In Javascript const is commonly used with arrays to create variagble
//  whose array reference can't be  changed
// 
//Import; you can stil modify the content of a const array. you cannot 
// assign a completely different array to that variable
// 
//Create an array with const
//
// example
const animals = ['leopard' , 'lion' , 'cheetah'];

console.log(animals);

// output
// ['leopard' , 'lion' , 'cheetah']

// Add items to a const array
// you can use .push() to add items

const jungleAnimal = ['lion', 'Elephant', 'giraffe'];

jungleAnimal.push('horse');

console.log(jungleAnimal);

// output 
 // ['lion', 'Elephant', 'giraffe', 'horse' ];

// what you cannolt do with const
 // you cannotn reasign the array to a new array
// this will generate an error
const animals = ['dog', 'cat', 'bird'];

animals = ['horse', 'cow', 'sheep'];

console.log(animals);
