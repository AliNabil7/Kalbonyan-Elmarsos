// Global scope (convertFahrenheitToCelsius, valueOne, valueTwo)
//// Local scope (tempF, result)
////// Local scope (isFreezing)

let convertFahrenheitToCelsius = function (tempF) {
  let result = (tempF - 32) * (5 / 9);

  if (result <= 0) {
    let isFreezing = true;
  }

  return result;
};

let valueOne = convertFahrenheitToCelsius(32);
let valueTwo = convertFahrenheitToCelsius(68);

console.log(valueOne);
console.log(valueTwo);
