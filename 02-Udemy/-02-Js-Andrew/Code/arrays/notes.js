const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: " Exercise. Eating a bit better",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

// findIndex() to find the index
// find() to find the note itself

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

// console.log(findNotes(notes, "eating"));

// const note = findNote(notes, "some other office modification");
// console.log(note);

sortNotes(notes);
console.log(notes);

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

//

//

// console.log(notes.length);
// console.log(notes);

// let someObject = {};
// let otherObject = someObject;

// const index = notes.findIndex(function (note, index) {
//   console.log(note);
//   return note.title === "Habits to work on";
// });
// console.log(index);

// CODE BEFORE ARRAYS

// console.log(notes.pop());
// notes.push("My new note");

// console.log(notes.shift());
// notes.unshift("My first note");

// notes.splice(1, 1, "This is the new second item");

// notes[2] = "This is now the new note 3";

// notes.forEach(function (item, index) {
//   console.log(index);
//   console.log(item);
// });

// // Counting...
// for (let count = 2; count >= 0; count--) {
//   console.log(count);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//   console.log(notes[count]);
// }
