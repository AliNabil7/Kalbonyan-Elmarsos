// HTTP (HyperText Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let firstTurn;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  firstTurn.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = firstTurn.statusMessage;

  const letters = firstTurn.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  firstTurn = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getCurrentCountry()
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
