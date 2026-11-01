// The JavaScript slice() method allows you to copy a 
// portion of an array without changing the original array.
// 
// It is useful when you want to take certain items
// \ out of an array and place them into another array.
// using slice  ()
// basic syntax
// 
// example with an aray
let robot = ['arm','spareparts', 'battery', 'head', 'body'];

let human = robot.slice(0, 3);

console.log(human);

// output
// ['arm', 'spare parts', 'battery']

// Copy the entire arrray 
// you can use slice() without any argumemts

let xrobot = ['arm', 'torso', 'sparepart', 'head'];

let person = xrobot =xrobot.slice();

console.log(person);

// output
// ['arm', 'spareparts', 'battery', 'head']
