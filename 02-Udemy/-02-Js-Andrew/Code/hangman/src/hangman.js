class Hangman {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split("");
    this.guesses = guesses;
    this.guess = [];
    this.status = "playing";
  }

  setStatus() {
    const finished = this.word.every(
      (letter) => this.guess.includes(letter) || letter === " "
    );

    if (this.guesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }

  get puzzle() {
    let puzzle = "";

    this.word.forEach((letter) => {
      if (this.guess.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  }

  makeGuess(letter) {
    letter = letter.toLowerCase();
    const isUnique = !this.guess.includes(letter);
    const isBadGuess = !this.word.includes(letter);

    if (this.status !== "playing") {
      return;
    }

    if (isUnique) {
      this.guess = [...this.guess, letter];
    }

    if (isUnique && isBadGuess) {
      this.guesses--;
    }

    this.setStatus();
  }

  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.guesses}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}"`;
    } else {
      return "Great work! You guessed the word";
    }
  }
}

export { Hangman as default };
