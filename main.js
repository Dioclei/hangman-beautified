let animeList = ["Your Name", "Weathering with You", "Stein's Gate", "Demon Slayer", "Vinland Saga", "Glepnir", "Future Diary", "Kaguya-sama: Love is War", "Attack on Titan", "Fullmetal Alchemist: Brotherhood", "Hyouka", "Made in Abyss", "Her Blue Sky", "The Promised Neverland", "Puella Magi Madoka Magica", "Fate/Apocrypha", "Beastars", "Tower of God", "A Silent Voice", "Overlord", "Charlotte", "Violet Evergarden", "Nisekoi", "Rascal Does Not Dream of Bunny Girl Senpai", "Goblin Slayer", "Isekai Quartet", "The Saga of Tanya the Evil", "Sword Art Online: Alicization", "Devilman: Crybaby", "Blend S", "Chihayafuru", "Fate/Zero", "Kakegurui", "ERASED"]

let leagueChampions = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Sejuani", "Senna", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Ryze", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"]

var wordBank = {
  unguessed: leagueChampions.slice(0),
  guessed: [],
  current: "",
  blanksLeft: 0,
  guessedLetters: [],
}



function generateWord() {
  let randIndex = Math.floor(Math.random() * wordBank['unguessed'].length)
  return wordBank['unguessed'][randIndex]
}
