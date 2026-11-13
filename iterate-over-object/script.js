
 //Javascript example 
 // Iterating over objects and calculating
 //  an average.
 // Javascript 
 
// 
// example

 const movieReview = {
  arrival   : 9,
  Albert  : 8.5,
  annie  : 8,
  Pattons : 7.5 ,
  " Kill Bill" : 8.3,
  'Little Miss sunsh ine' : 7.5,
   coraline : 8.5
 };

//  for (let x of movieReview)
//  {
//   console.log(x); 
//  }
 // 
 // types of iterate over an object 
 // List examples
 // this code combines 2 things you have
 // been learning : iterating over objects
 // and calculating an averae.
 //
 // loop through the movie object
for (let movie of Object.keys(movieReview)) {
   console.log(movie), movieReview[movie]; 
}

 const rating = Object.values(movieReview);
 let total = 0;
 for (let r of rating ){
  total += r;
 }
 let avg = total / rating.length;
 // this is an average - not total
 console.log(total);
