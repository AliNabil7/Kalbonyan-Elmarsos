// Function - input (argument), code, output (return value)

let greetUser = function () {
  console.log("Welcome user!");
};

greetUser();
greetUser();
greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// CHALLENGE AREA

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (tempF) {
  let result = (tempF - 32) * (5 / 9);
  return result;
};

// Call a couple of times (32 -> 0) (68 -> 20)
let valueOne = convertFahrenheitToCelsius(32);
let valueTwo = convertFahrenheitToCelsius(68);

// Print the converted values
console.log(valueOne);
console.log(valueTwo);
