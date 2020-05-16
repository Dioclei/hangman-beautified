var wordBank = {
  unguessed: ["test", "paper", "pencil", "eraser", "examination", "grades", "top-scorer", "mathematics", "rubbish", "fail", "ungraded", "movies"],
  guessed: [],
  current: "",
}

function generateWord() {
  let randIndex = Math.floor(Math.random() * wordBank['unguessed'].length)
  return wordBank['unguessed'][randIndex]
}
