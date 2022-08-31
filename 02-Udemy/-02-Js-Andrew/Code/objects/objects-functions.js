let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A People's History",
  author: "Howard Zinn",
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// CHALLENGE AREA
// Create function - take fahrenheit in - return object with all three

let convertTemp = function (tempF) {
  return {
    fahrenheit: tempF,
    celsius: (tempF - 32) * (5 / 9),
    kelvin: (tempF + 459.67) * (5 / 9),
  };
};

let temp1 = convertTemp(32);
let temp2 = convertTemp(50);
let temp3 = convertTemp(68);

console.log(temp1.celsius);
console.log(temp1.kelvin);
console.log(temp1.fahrenheit);
console.log(temp2.kelvin);
console.log(temp3.fahrenheit);
