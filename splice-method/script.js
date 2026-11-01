// Exercise 
// JavaScript splice() Method
// The JavaScript splice() method is used to add, 
// remove, or replace elements in an existing array.

// Unlike slice(), the splice() method actually changes
//  (modifies) the original array.
// Examples 
//

// basic syntax
// 
// example with splice()

// Array.split(startTransition, deleteCount, ClipboardItem, item1, item2, item3);
 
let robots = ['arm', 'spare parts', 'battery', 'head', 'leg', 'body'];

robots.splice(1, 2);

console.log(robots);

// output 
// ['arm', 'head', 'leg', 'body'']

// What's happening?
// - 1 means start at index 1 (spare parts).
// - 2 means remove two elements.
// - It removes spare parts and battery.
