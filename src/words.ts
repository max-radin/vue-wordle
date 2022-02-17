const defaultMessage = " Using word of the day instead.";

export function getDay() {
  const now = new Date();
  const start = new Date(2022, 1, 5);
  const diff = Number(now) - Number(start);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function getWordOfTheDay(day: number) {
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
  "tales",
  "hurin",
  "valar",
  "eldar",
  "rider",
  "grima",
  "eyrie",
  "maiar",
  "bilbo",
  "brown",
  "sting",
  "frodo",
  "elves",
  "nenya",
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
  "queen",
  "vilya",
  "witch",
  "merry",
  "umbar",
  "eagle",
  "biter",
  "beorn",
  "black"
];

const allowedGuesses = [
  "minas",
  "thain",
  "bofur",
  "kasem",
  "barad",
  "endor",
  "meara",
  "bungo",
  "uruks",
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
  "anwar",
  "aldor",
  "brego",
  "folca",
  "melko",
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
  "shade",
  "ghost"
];

export const allWords = [...answers, ...allowedGuesses];
