// Create an array with five todos
// const todo = [
//   "Study JavaScript",
//   "Memorize Quran",
//   "Finish the work I have",
//   "Care for my cat",
//   "Meet some friends",
// ];

// // FIRST CHALLENGE
// // // You have x todos
// // console.log(`You have ${todo.length} todos`);

// // // Print the first and second to last items -> Todo: walk the dog
// // console.log(
// //   `First todo: ${todo[0]}! Second to last Todo: ${todo[todo.length - 2]}`
// // );

// // SECOND CHALLENGE

// // Delete the 3rd item
// todo.splice(2, 1);
// // Add a new item onto the end
// todo.push("Pray Taraweeh");
// // Remove the first item from the list
// todo.shift();

// console.log(`You have ${todo.length} todos`);

// // THIRD CHALLENGE

// // 1. The first item
// // 2. The second item

// todo.forEach(function (item, index) {
//   console.log(`${index + 1}. ${item}`);
// });

// // FOURTH CHALLENGE

// // for (let count = 0; count < todo.length; count++) {
// //   console.log(`${count + 1}. ${todo[count]}`);
// // }

// FIFTH CHALLENGE

// 1. Convert array to array of objects -> text, completed
// I used for loop to convert the array, but will comment it out and write Andrew's code now
// for (let i = 0; i < todo.length; i++) {
//   todo[i] = {
//     text: todo[i],
//     completed: true,
//   };
// }

const todos = [
  {
    text: "Order cat food",
    completed: true,
  },
  {
    text: "Clean kitchen",
    completed: true,
  },
  {
    text: "Buy food",
    completed: false,
  },
  {
    text: "Do work",
    completed: true,
  },
  {
    text: "Exerise",
    completed: false,
  },
];

// 2. Create function to remove a todo by text value
// const deleteTodo = function (todos, todoText) {
//   const index = todos.findIndex(function (todo) {
//     return todo.text.toLowerCase() === todoText.toLowerCase();
//   });
//   if (index > -1) {
//     todos.splice(index, 1);
//   }
// };

// const getThingsToDo = function (todos) {
//   return todos.filter(function (todos) {
//     return !todos.completed;
//   });
// };

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    // false should be before true so console.log(false < true) returns true
    if (a.completed < b.completed) {
      return -1;
    } else if (a.compd > blete.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos));

// deleteTodo(todos, "Buy food");
// console.log(todos);
