"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let text = "";
for (let index = 0; index < numbers.length; index++) {
  text += numbers[index] + "";
}

printOut(text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(numbers.join(", "));
printOut("");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const helloThere = "Hei på deg, hvordan har du det?";
const words = helloThere.split(" ");

words.forEach((word, index) => {
  printOut(index + " " + (index + 1) + " " + word);
});

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girlNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeName(aArray, aItem) {
  const result = aArray.indexOf(aItem);
  if (result > -1) {
    printOut("Can remove " + aItem + " from the array");
    aArray.splice(result, 1);
  } else {
    printOut("Can't remove " + aItem + " from the array");
  }
}

function findNameAndRemove(aArray, aItem) {
  let index = -1;
  const result = aArray.find(findName);
  if (result) {
    printOut("Can remove " + aItem + " from the array");
    aArray.splice(index, 1);
  } else {
    printOut("Can't remove " + aItem + " from the array");
  }

  function findName(aName, aIndex) {
    index = aIndex;
    return aName === aItem;
  }
}

removeName(girlNames, "Arne");
findNameAndRemove(girlNames, "Ingrid");
printOut(girlNames.join(", "));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const names = girlNames.concat(boyNames);
names.forEach(printName);
function printName(aName) {
  printOut(aName);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
  #Tile;
  #Author;
  #ISBN;

  constructor(aTile, aAuthor, aISBN) {
    this.#Tile = aTile;
    this.#Author = aAuthor;
    this.#ISBN = aISBN;
  }

  toString() {
    return this.#Tile + ", " + this.#Author + ", " + this.#ISBN;
  }
}

const books = [new TBook("Tørst", "Jo Nesbø", "9788242180827"), new TBook("Panserhjerte", "Jo Nesbø", "9788242180780"), new TBook("Et helt halvt år", "Jojo Moyes", "9788290583472")];

books.forEach(printBook);
function printBook(aBook) {
  printOut(aBook.toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag" },
  WeekDay7: { value: 0x40, name: "Søndag", type: "Helligdag" },
  Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
  Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

const keys = Object.keys(EWeekDays);
printOut("Keys: " + keys.join(", "));
const values = Object.values(EWeekDays);
printOut("Values: " + values.join(", "));
let valueKeys = Object.values(EWeekDays[keys[7]]);
printOut("ValueKeys: " + valueKeys.join(", "));

for (let index = 0; index < keys.length; index++) {
  const key = keys[index];
  const keyObject = EWeekDays[key];
  const keyObjectEntries = Object.entries(keyObject);
  let details = "";

  for (let i = 0; i < keyObjectEntries.length; i++) {
    const [key, value] = keyObjectEntries[i];
    details += `${key}: ${value}, `;
  }

  details = details.trimEnd().replace(/,$/, "");

  const text = `${key}: ${details}`;
  printOut(text);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomValues = [];
for (let i = 0; i < 35; i++) {
  const randomValue = Math.ceil(Math.random() * 20);
  randomValues.push(randomValue);
}

printOut(" Random Values: " + randomValues.join(", "));

randomValues.sort(sortRandomValues);
printOut("Tabellen i stigende rekkefølge: " + randomValues.join(", "));
randomValues.reverse();
printOut("Tabellen i synkende rekkefølge: " + randomValues.join(", "));

function sortRandomValues(aValue1, aValue2) {
  return aValue1 - aValue2;
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const frequency = {};
for (let i = 0; i < randomValues.length; i++) {
  const value = randomValues[i];
  if (frequency[value]) {
    frequency[value]++;
  } else {
    frequency[value] = 1;
  }
}

let frequencyKeys = Object.keys(frequency);
frequencyKeys.sort(sortfrequency);

function sortfrequency(aValue1, aValue2) {
  const frequencyOne = frequency[aValue1];
  const frequencyTwo = frequency[aValue2];
  return frequencyTwo - frequencyOne;
}

text = "";
for (let i = 0; i < frequencyKeys.length; i++) {
  const frequencyKey = frequencyKeys[i];
  const frequencyValue = frequency[frequencyKey];
  text += frequencyKey + ": " + frequencyValue + ", ";
}
printOut(text);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myTable = [];
for (let row = 0; row < 5; row++) {
  const columns = [];
  for (let column = 0; column < 9; column++) {
    const cell = +row + "," + column;
    columns.push(cell);
  }
  myTable.push(columns);
}

text = "";
for (let row = 0; row < myTable.length; row++) {
  const columns = myTable[row];

  for (let column = 0; column < columns.length; column++) {
    const cell = columns[column];
    text += "[" + cell + "]";
  }
  printOut(text);
  text = "";
}
printOut(newLine);
