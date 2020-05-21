function Category(category, items) {
  this.categoryName = category
  this.items = items
}

function WordBank(category) {
  console.log(category)
  this.categoryName = category['categoryName']
  this.unguessed = category['items']
  this.guessed = []
  this.current = ""
  this.blanksLeft = 0
  this.guessedLetters = []
}

const ANIME_CATEGORY = new Category(
  'Anime',
  ["Your Name", "Weathering with You", "Stein's Gate", "Demon Slayer", "Vinland Saga", "Gleipnir", "Future Diary", "Kaguya-sama: Love is War", "Attack on Titan", "Fullmetal Alchemist: Brotherhood", "Hyouka", "Made in Abyss", "Her Blue Sky", "The Promised Neverland", "Puella Magi Madoka Magica", "Fate/Apocrypha", "Beastars", "Tower of God", "A Silent Voice", "Overlord", "Charlotte", "Violet Evergarden", "Nisekoi", "Rascal Does Not Dream of Bunny Girl Senpai", "Goblin Slayer", "Isekai Quartet", "The Saga of Tanya the Evil", "Sword Art Online: Alicization", "Devilman: Crybaby", "Blend S", "Chihayafuru", "Fate/Zero", "Kakegurui", "ERASED"],
)

const LEAGUE_CATEGORY = new Category(
  'League of Legends Champions',
  ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Sejuani", "Senna", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Ryze", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"],
)

const SCHOOL_CATEGORY = new Category(
  'School',
  ["Paper", "Pencil", "Google Chrome", "Macbook Pro", "Notebook", "Water Bottle", "Table", "Whiteboard", "Marker", "Highlighter", "Frisbee", "Printer", "Colour Pencil", "Paintbrush", "Charcoal Eraser", "Letter of Appreciation", "Certificate of Excellence", "Examination", "School Fees", "Pocket Money", "Threadmill", "Free Weights", "Macaroni and Cheese", "Ham and Cheese Sandwich", "Mackerel Curry Rice", "Ice Milo", "Auditorium", "Android Studio"],
)

var currentWordBank;

function updateCategory(newCategoryString) {
  switch (newCategoryString) {
    case 'ANIME_CATEGORY':
      currentWordBank = new WordBank(ANIME_CATEGORY)
      break;
    case 'LEAGUE_CATEGORY':
      currentWordBank = new WordBank(LEAGUE_CATEGORY)
      break;
    case 'SCHOOL_CATEGORY':
      currentWordBank = new WordBank(SCHOOL_CATEGORY)
      break;
    default:
      console.log('No category set, default category set as SCHOOL CATEGORY')
      currentWordBank = new WordBank(SCHOOL_CATEGORY)
      break;
  }
}

function generateWord() {
  let randIndex = Math.floor(Math.random() * currentWordBank['unguessed'].length)
  return currentWordBank['unguessed'][randIndex]
}

function isAllowedCharacter(key) {
  return /[a-zA-Z-'":/]/.test(key)
}
