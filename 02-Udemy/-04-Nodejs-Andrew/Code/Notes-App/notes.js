const chalk = require("chalk");
const fs = require("fs");

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log(chalk.red.inverse("There are no notes!"));
  } else {
    console.log(chalk.blue.inverse("Your notes:"));
    notes.forEach((note) => {
      console.log(note.title);
    });
  }
};

const readNotes = (title) => {
  const notes = loadNotes();
  const noteRequested = notes.find((note) => note.title === title);

  if (noteRequested) {
    console.log(chalk.blue.inverse(noteRequested.title));
    console.log(noteRequested.body);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNotes,
};
