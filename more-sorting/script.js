// Exercise 
// JavaScript  sorting
// IN JavaScript, .sort() is an array method
//  used to arrange items in a particular order.
// 
// we can sort numbers, words, names, objects
//
// 
// example with sorting 
// sort example
let people = ['species', 'humans', 'robots' , 'animals', 'mammals'];

people.splice(1, 0, 'aliens');
 
console.log(people);

// output
// [ "species", "aliens", "humans", "robots", "animals", "mammals" ]

let airplane = ['parts' , 'wings', 'engine', 'tail', 'passenger'];

airplane.splice(1, 0, 'luguage');

console.log(airplane);

// here's how splice works 
// 1 - position where you want to insert
// 0 - how many items to move
// 'luguage '  item you want to insert

let airplanes = ['takeoff', 'arrival', 'destination'];

airplanes.splice(1, 0, 'model', 'yearmake');

console.log(airplanes);
