let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);

// CHALLENGE AREA

// name, age, location
// Increase age by 1 and print message again

let myInfo = {
  name: "Ali",
  age: 25,
  location: "Giza",
};

console.log(`${myInfo.name} is ${myInfo.age} and lives in ${myInfo.location}.`);

myInfo.age = myInfo.age + 1;
console.log(`${myInfo.name} is ${myInfo.age} and lives in ${myInfo.location}.`);
