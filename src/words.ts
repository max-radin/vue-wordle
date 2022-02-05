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
  "arwen",
  "gimli",
  "quest",
  "woods",
  "moria",
  "eomer",
  "eowyn",
  "uruks",
  "tales",
  "hurin",
  "valar",
  "eldar",
  "rider",
  "grima",
  "eyrie",
  "maiar",
  "bilbo",
  "anwar",
  "brown",
  "sting",
  "frodo",
  "elves",
  "nenya",
  "barad",
  "spell",
  "harad",
  "wargs",
  "elven",
  "misty",
  "ungol",
  "white",
  "rohan",
  "realm",
  "dwarf",
  "narya",
  "downs",
  "smaug",
  "wyrms",
  "gloin",
  "durin",
  "siege",
  "ainur",
  "istar",
  "balin",
  "shire",
  "ogres",
  "troll",
  "kings",
  "abyss",
  "tower",
  "rings",
  "minas",
  "queen",
  "vilya",
  "witch",
  "merry",
  "umbar",
  "eagle",
];

const allowedGuesses = [
  "kasem",
  "endor",
  "beorn",
  "thain",
  "meara",
  "bungo",
  "boron",
  "drogo",
  "ulbar",
  "hiril",
  "percy",
  "huorn",
  "uinen",
  "celos",
  "bifur",
  "ugluk",
  "anson",
  "erech",
  "khand",
  "daisy",
  "indor",
  "talan",
  "urwen",
  "parth",
  "arnor",
  "freda",
  "beril",
  "celon",
  "aldor",
  "brego",
  "folca",
  "melko",
  "shade",
  "argon",
  "finwe",
  "elros",
  "andor",
  "siril",
  "poros",
  "serni",
  "narog",
  "celon",
  "rivil",
  "indis",
  "manwe",
  "thror",
  "basso",
];

export const allWords = [...answers, ...allowedGuesses];
