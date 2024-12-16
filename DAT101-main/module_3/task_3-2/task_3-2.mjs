"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows */

let line1 = "";
for (let i = 1; i <= 10; i++) {
  if (i == 10) {
    line1 += i;
  } else {
    line1 += i + ",";
  }
}
printOut(line1);

let line2 = "";
for (let i = 10; i >= 1; i--) {
  if (i == 1) {
    line2 += i;
  } else {
    line2 += i + ",";
  }
}
printOut(line2);

printOut("");
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress.*/
/* Math.ceil og Math.floor runder enten opp eller ned for å fjerne desimaler*/

const answerNumber = 45;
let guessNumber = 0;

while (answerNumber != guessNumber) {
  guessNumber = Math.ceil(Math.random() * 60);
}
printOut("Guess Number = " + guessNumber.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time.*/
guessNumber = 0;
let guessCount = 0;
const startTime = Date.now();
while (answerNumber != guessNumber) {
  guessCount++;
  guessNumber = Math.ceil(Math.random() * 1000000);
}

const endTime = Date.now();
const timeUsed = endTime - startTime;

printOut("Antall gjetninger " + guessCount.toString() + " tok " + timeUsed.toString() + " ms");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let primes = [];

for (let num = 2; num < 200; num++) {
  let isPrime = true;
  let divisor = 2;

  while (divisor <= Math.sqrt(num)) {
    if (num % divisor === 0) {
      isPrime = false;
      break;
    }
    divisor++;
  }
  if (isPrime) {
    primes.push(num);
  }
}
printOut("Primtall mellom 2 og 199: " + primes.join(", "));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let r = 1; r <= 7; r++) {
  let row = "";

  for (let k = 1; k <= 9; k++) {
    row += "K" + k + "R" + r + " ";
  }
  printOut(row);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const maxScore = 236;

function generateGrade() {
  const score = Math.floor(Math.random() * maxScore) + 1;
  const percentage = (score / maxScore) * 100;
  let grade;

  if (percentage >= 89) {
    grade = "A";
  } else if (percentage >= 77) {
    grade = "B";
  } else if (percentage >= 65) {
    grade = "C";
  } else if (percentage >= 53) {
    grade = "D";
  } else if (percentage >= 41) {
    grade = "E";
  } else {
    grade = "F";
  }
  return { score, grade };
}
const studentGrade = generateGrade();
printOut(`Score: ${studentGrade.score}, Grade: ${studentGrade.grade}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function rollDice() {
  return Array.from({ length: 6 }, () => Math.ceil(Math.random() * 6));
}

function countOccurrences(dice) {
  const counts = {};
  dice.forEach((die) => {
    counts[die] = (counts[die] || 0) + 1;
  });
  return counts;
}

function simulateDiceGoals() {
  let fullStraightThrows = 0;
  let threePairsThrows = 0;
  let towerThrows = 0;
  let yahtzeeThrows = 0;

  let fullStraightFound = false;
  let threePairsFound = false;
  let towerFound = false;
  let yahtzeeFound = false;

  while (!fullStraightFound || !threePairsFound || !towerFound || !yahtzeeFound) {
    const dice = rollDice();
    const counts = countOccurrences(dice);
    const values = Object.values(counts);

    if (!fullStraightFound) fullStraightThrows++;
    if (!threePairsFound) threePairsThrows++;
    if (!towerFound) towerThrows++;
    if (!yahtzeeFound) yahtzeeThrows++;

    if (!fullStraightFound && [1, 2, 3, 4, 5, 6].every((num) => counts[num] === 1)) {
      fullStraightFound = true;
    }

    if (!threePairsFound && values.filter((count) => count === 2).length === 3) {
      threePairsFound = true;
    }

    if (!towerFound && values.includes(2) && values.includes(4)) {
      towerFound = true;
    }
    if (!yahtzeeFound && values.includes(6)) {
      yahtzeeFound = true;
    }
  }

  printOut(`Full Straight: ${fullStraightThrows} kast`);
  printOut(`3 par: ${threePairsThrows} kast`);
  printOut(`Tårn: ${towerThrows} kast`);
  printOut(`Yatzy: ${yahtzeeThrows} kast`);
}

simulateDiceGoals();
