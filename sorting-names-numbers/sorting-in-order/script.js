// Exercise
// In JavaScript, you use the .sort() method to sort arrays containing 
// words or numbers.

//There is one important difference: sorting words is straightforward,
 // but sorting numbers requires a comparison function.

let birds = [ 'eagle', 'pigeon', 'hawk', 'condor' ];

birds.sort();

console.log(birds);
 // output
//['eagle', 'hawk', 'pigeon', 'sparrow']

// sorting numbers -smallest to largest
let numbers = [555, 6, 35, 3, 78];

numbers.sort(function(a, b ) {
    return a - b;
});

console.log(numbers);

// output
 [ 3, 6, 35, 75, 555]
 
// sorting numbers largest to smallest

 let xnumbers = [40, 5, 8, 25, 10, 2 ];

 xnumbers.sort(function(a, b ) {
     return b - a;
 });

 console.log(xnumbers);

// output should be in order
