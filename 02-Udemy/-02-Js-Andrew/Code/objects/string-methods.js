let name = "  Ali Nabil ";

// Length property
console.log(name.length);

// Convert to uppercase
console.log(name.toUpperCase());

// Convert to lowercase
console.log(name.toLowerCase());

// Includes method
let password = "abc123asdf098";
console.log(password.includes("password"));

// Trim method
console.log(name.trim());

// CHALLENGE AREA - MY CODE

// isValidPassword
// length is more than 8 - and it doesn't contain the word password
let isValidPassword = function (password) {
  if (password.includes("password") || password.length < 9) {
    return "This is an invalid password";
  } else {
    return "This is a valid password";
  }
};

// CHALLENGE AREA - ANDREW'S CODE
// let isValidPassword = function (password) {
//   if (password.length > 8 && !password.includes("password")) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let isValidPassword = function (password) {
//   password.length > 8 && !password.includes("password")
// };

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abc123!@#$$"));
console.log(isValidPassword("asdfpasdfpoijpassword"));
