var wordBank = {
  unguessed: ["kimi no nawa", "weathering with you", "stein's gate", "demon slayer", "vinland saga", "glepnir", ],
  guessed: [],
  current: "",
  blanksLeft: 0,
  guessedLetters: [],
}

function generateWord() {
  let randIndex = Math.floor(Math.random() * wordBank['unguessed'].length)
  return wordBank['unguessed'][randIndex]
}
