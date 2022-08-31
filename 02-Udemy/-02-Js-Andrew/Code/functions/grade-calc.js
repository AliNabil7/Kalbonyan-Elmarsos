// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

// CHANGING FROM LET TO CONST IN THE OBJECTS SECTION
const gradeCalc = function (stuScore = 0, totalPossibleScore = 20) {
  if (typeof stuScore !== "number" || typeof totalPossibleScore !== "number") {
    throw Error("Please provide numbers only");
  }

  const gradePercent = (stuScore / totalPossibleScore) * 100;

  if (gradePercent >= 90) {
    return `You got an A (${gradePercent})%!`;
  } else if (gradePercent >= 80 && gradePercent < 90) {
    return `You got a B (${gradePercent})%!`;
  } else if (gradePercent >= 70 && gradePercent < 80) {
    return `You got a C (${gradePercent})%!`;
  } else if (gradePercent >= 60 && gradePercent < 70) {
    return `You got a D (${gradePercent})%!`;
  } else {
    return `You got an F (${gradePercent})%!`;
  }
};

// ANDREW'S SOLUTION

// let score = gradeCalc(17.98, 20);
// console.log(score);

// let gradeCalc = function (stuScore = 0, totalPossibleScore = 20) {
//   let gradePercent = (stuScore / totalPossibleScore) * 100;
//   let grade = "";

//   if (gradePercent >= 90) {
//     grade = "A";
//   } else if (gradePercent >= 80 && gradePercent < 90) {
//     grade = "B";
//   } else if (gradePercent >= 70 && gradePercent < 80) {
//     grade = "C";
//   } else if (gradePercent >= 60 && gradePercent < 70) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }
//   return `You got a ${grade} (${gradePercent})%!`;
// };

try {
  let score = gradeCalc("test");
  console.log(score);
} catch (e) {
  console.log(e.message);
}
