// Javascript example. We can shorten both functions
// using Javascript methods. lets look at some two
// approachs
// Example : return statement

// using return values



 // we use triple  equal sign ===
function isRed(color) {
	return color.toLowerCase() === 'red' ;

}

// anothe example , more advanced version
// of above example , isRed(color)
// choose in that array is either red or purple
// will return true
// loop over array for lets color of array
// 
// the 2 pipes  || mean or

function containsRed(arr)  {
	if (color === 'red' || color  === 
		'purple'{
			return true;
		}
	)
	return: false;
}

//if our array lookss green, pink, blue>
// will return false 
// 
// if our array conatains
// [' bue', 'pink', 'purple' ]
// 
// . Short explanation
// - function containsRed(arr) — receives an array.
// - for (let color of arr) — checks each item in the array.
// - if — checks whether the color is red OR purple.
// - return true — stops and returns true if either color is found.
// - return false — if neither color is found after checking everything.
