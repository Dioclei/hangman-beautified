var wordBank = {
  unguessed: ["Kimi No Nawa", "Weathering with You", "Stein's Gate", "Demon Slayer", "Vinland Saga", "Glepnir", "Mirai Nikki", "Kaguya-sama: Love is War", "Attack on Titan", "Fullmetal Alchemist: Brotherhood", "Hyouka", "Made in Abyss", "Her Blue Sky", "The Promised Neverland", "I Don't Want to Get Hurt, so I'll Max Out My Defense", "Mahou Shoujo Madoka Magica"],
  guessed: [],
  current: "",
  blanksLeft: 0,
  guessedLetters: [],
}

function generateWord() {
  let randIndex = Math.floor(Math.random() * wordBank['unguessed'].length)
  return wordBank['unguessed'][randIndex]
}
