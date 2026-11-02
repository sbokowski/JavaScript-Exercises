// Exercise
// In JavaScript, you use the .sort() method to sort arrays containing 
// words or numbers.

//There is one important difference: sorting words is straightforward,
 // but sorting numbers requires a comparison function.


let people = [ 'Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];

people.sort();
// ["Angie", "Jolene", "Maggie May", "Mrs. Robsinson", "Roxanne"]
console.log(people);



let numbs = [24, 10, 10000, 67, 99];
nums.sort();
//[10, 100000, 34, 67, 99]

console.log(nums);
//Sorts by converting values to strings and comparing 
// their UTF-16 character codes.

//We will learn how to change this behavior later on!
