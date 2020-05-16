var wordBank = {
  unguessed: ["test", "paper", "pencil", "eraser", "examination", "grades", "top-scorer", "mathematics", "rubbish", "fail", "ungraded", "movies"],
  guessed: [],
  current: "",
  blanksLeft: 0,
  guessedLetters: [],
}

function generateWord() {
  let randIndex = Math.floor(Math.random() * wordBank['unguessed'].length)
  return wordBank['unguessed'][randIndex]
}
