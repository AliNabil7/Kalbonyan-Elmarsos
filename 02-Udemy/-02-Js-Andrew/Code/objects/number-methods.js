let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// 0 - 10

//CHALLENGE AREA - MY CODE
// 1 - 5 - true if correct - false if not correct

let makeGuess = function (num) {
  let min = 1;
  let max = 5;
  let answer = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(answer);
  if (num === answer) {
    return true;
  } else {
    return false;
  }

  // ANDREW'S CODE
  // return num === answer
};
console.log(makeGuess(1));
