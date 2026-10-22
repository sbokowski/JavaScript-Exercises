 // javascript exercise 
// Password Length and Space Check. 
// This code checks whether a password meets two basic conditions:
// 1. The password must be at least 6 characters long.
// 2. The password must not contain any spaces.
let password = 'hello kitty';

if (password.length >= 6) {
  if (password.indexOf(' ') === -1){
    console.log('Valid Password');
  }
  else {
    console.log('Password is long enough, but dows not contain spaces ');
   }
  }
else {
  console.log("Password must be longer");
}
