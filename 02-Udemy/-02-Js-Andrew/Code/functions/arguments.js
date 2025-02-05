// Multiple arguments
let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function (name = "Anonymous", score = 0) {
  // return "Name: " + name + " - Score: " + score;
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreText(undefined, 100);
console.log(scoreText);

// CHALLENGE AREA
// total, tipPercent .2
let getTip = function (total, tipPercent = 0.2) {
  // return total * tipPercent;
  return `A ${tipPercent * 100}% tip on $${total} would be $${
    total * tipPercent
  }`;
};

let tipAmount = getTip(150, 0.15);
console.log(tipAmount);
