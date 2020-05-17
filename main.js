var wordBank = {
  unguessed: ["Your Name", "Weathering with You", "Stein's Gate", "Demon Slayer", "Vinland Saga", "Glepnir", "Future Diary", "Kaguya-sama: Love is War", "Attack on Titan", "Fullmetal Alchemist: Brotherhood", "Hyouka", "Made in Abyss", "Her Blue Sky", "The Promised Neverland", "Puella Magi Madoka Magica", "Fate/Apocrypha", "Beastars", "Tower of God", "A Silent Voice", "Overlord", "Charlotte", "Violet Evergarden", "Nisekoi", "Rascal Does Not Dream of Bunny Girl Senpai", "Goblin Slayer", "Isekai Quartet", "The Saga of Tanya the Evil", "Sword Art Online: Alicization", "Devilman: Crybaby", "Blend S", "Chihayafuru", "Fate/Zero", "Kakegurui", "ERASED"],
  guessed: [],
  current: "",
  blanksLeft: 0,
  guessedLetters: [],
}

function generateWord() {
  let randIndex = Math.floor(Math.random() * wordBank['unguessed'].length)
  return wordBank['unguessed'][randIndex]
}
