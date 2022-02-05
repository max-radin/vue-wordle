const defaultMessage = " Using word of the day instead.";

export function getWordOfTheDay() {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1));
      if (query.length !== 5) {
        alert(`Incorrect word length from encoded query. ${defaultMessage}`);
      } else {
        return query;
      }
    } catch (e) {
      alert(`Malformed encoded word query. ${defaultMessage}`);
    }
  }

  const now = new Date();
  const start = new Date(2022, 0, 0);
  const diff = Number(now) - Number(start);
  let day = Math.floor(diff / (1000 * 60 * 60 * 24));
  while (day > answers.length) {
    day -= answers.length;
  }
  return answers[day];
}

// copied from Wordle source
const answers = [
  "ulbar",
  "hiril",
  "percy",
  "mages",
  "mines",
  "gimli",
  "quest",
  "woods",
  "bifur",
  "moria",
  "eomer",
  "eowyn",
  "ugluk",
  "uruks",
  "tales",
  "bards",
  "drogo",
  "hurin",
  "valar",
  "eldar",
  "rider",
  "grima",
  "kasem",
  "celon",
  "eyrie",
  "beril",
  "maiar",
  "bilbo",
  "anwar",
  "brown",
  "sting",
  "lords",
  "frodo",
  "celos",
  "magic",
  "sword",
  "arwen",
  "elves",
  "basso",
  "barad",
  "boron",
  "spell",
  "harad",
  "staff",
  "wargs",
  "elven",
  "misty",
  "ungol",
  "white",
  "rohan",
  "talan",
  "realm",
  "bungo",
  "horse",
  "dwarf",
  "narya",
  "downs",
  "daisy",
  "indor",
  "smaug",
  "wyrms",
  "gloin",
  "durin",
  "gorge",
  "siege",
  "ainur",
  "istar",
  "balin",
  "anson",
  "shire",
  "ogres",
  "troll",
  "kings",
  "abyss",
  "tower",
  "meara",
  "rings",
  "urwen",
  "parth",
  "minas",
];

const allowedGuesses = answers;

export const allWords = [...answers, ...allowedGuesses];
