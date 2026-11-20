// Example : return statement
//
// exercise! You're creating a password validation function.

// Your current code checks whether the password is at least 8 
// characters long.
// using return values
// Function challenge : password /validator

function isValidPassword(password, username) {
    if (password.length >= 7 ) {
       return true;
    }
    return false;
}
// Simple explanation
// 
// password.length counts the nubers of characters
// >= 8 checks whether the password  has / at
// least 7 characters
// return true means the password passes
// return false means passwprd no pass
//
// Note:  you included username as a parameter
// but you are not using it yet.
 // 
 // Improved password validation 
 // 
 // lets add two more rules;
 // 1 password must be at least 
 // 2. password can't contain the username
//  
 function isValidPassword(password, username) {
    if (password.length >= 7 && !password.includes(username) ) {
        return true;
    }
    return false;
 }

 // Notes; 
 // && means AND ( both conditions must be true)
 // 
 // ! means NOT
 //
 // .includes() checks whether the password contains
 // the username
 //
 //  NOTE: we can shorten the function
 //
 function isValidPassword(password, username) {
    return password.length >= 7 && !password.includes(username);
 }

 console.log (isValidPassword('Hey123', 'john'));
 // true
 console.log (isValidPassword('hello', 'bob'));
 // false 
