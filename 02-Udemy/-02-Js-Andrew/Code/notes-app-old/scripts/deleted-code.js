// document.querySelector("#for-fun").addEventListener("change", function (e) {
//   console.log(e.target.checked);
// });

// document.querySelector("#name-form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e.target.elements.firstName.value);
//   e.target.elements.firstName.value = "";
// });

// -- Single --
// p
// #replace
// .item

// -- Multiple --
// p#order
// h1#title.application
// h1.app#title

// /////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////////
// // console.log("This is from a different file");
// // DOM - Document Object Model

// // Query and remove
// // const p = document.querySelector("p");
// // p.remove();

// // Query all and remove
// const ps = document.querySelectorAll("p");
// ps.forEach(function (p) {
//   p.textContent = "*****";
//   // console.log(p.textContent);
//   // p.remove();
// });

// // Add a new element
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new element from JavaScript";
// document.querySelector("body").appendChild(newParagraph);

// const user = {
//   name: "Ali",
//   age: 25,
// };
// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem("user", userJSON);

// const userJSON = localStorage.getItem("user");
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`);

// // Unix Epoch - January 1st 1970 00:00:00
// // 1000

// const now = new Date();
// const timestamp = now.getTime();

// const myDate = new Date(timestamp);
// console.log(myDate.getFullYear());

// // console.log(`Year: ${now.getFullYear()} `);
// // console.log(`Month: ${now.getMonth()} `);
// // console.log(`Day of month: ${now.getDate()} `);
// // console.log(`Hour: ${now.getHours()} `);
// // console.log(`Minute: ${now.getMinutes()} `);
// // console.log(`Seconds: ${now.getSeconds()} `);

// const firstDate = new Date("January 21 2021 12:00:00");
// const secondDate = new Date("June 28 2021 12:00:00");
// const timestampOne = firstDate.getTime();
// const timestampTwo = secondDate.getTime();

// if (timestampOne > timestampTwo) {
//   console.log(secondDate.toString());
// } else if (timestampOne < timestampTwo) {
//   console.log(firstDate.toString());
// }

// // const now = moment();
// // now.subtract(1, "week").subtract(20, "days");
// // console.log(now.format("MMMM Do, YYYY"));
// // console.log(now.fromNow());

// // const nowTimestamp = now.valueOf();
// // console.log(moment(nowTimestamp).toString());

// // MY CODE FOR THE CHALLENGE
// const now = moment().set({ year: 1997, month: 0, date: 21 });

// // ANDREW'S CODE
// // const birthday = moment();
// // birthday.year(1991).month(0).date(6);

// console.log(now.format("MMM D, YYYY"));
