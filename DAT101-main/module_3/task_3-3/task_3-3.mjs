"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodayDateInNorwegian() {
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("no-NB", options);
  printOut(formattedDate);
}

printTodayDateInNorwegian();

function getTodayDateInNorwegian() {
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("no-NB", options);
  printOut("Dagens dato: " + formattedDate);
  return today;
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateDaysUntilRelease() {
  const today = new Date();
  const releaseDate = new Date("2025-05-14");
  const msInADay = 1000 * 60 * 60 * 24;

  const difference = releaseDate - today;
  const daysLeft = Math.floor(difference / msInADay);

  return daysLeft;
}

function showCountdownTo2XKO() {
  getTodayDateInNorwegian();
  const daysLeft = calculateDaysUntilRelease();
  printOut("Det er " + daysLeft + " dager igjen til 2XKO lanseres den 14. mai 2025!");
}

showCountdownTo2XKO();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printCircleProperties(radius) {
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;

  printOut("Diameter: " + diameter);
  printOut("Circumference: " + circumference);
  printOut("Area: " + area);
}

printCircleProperties(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printRectangleProperties(rectangle) {
  const width = rectangle.width;
  const height = rectangle.height;

  const circumference = 2 * (width + height);
  const area = width * height;

  printOut("Circumference: " + circumference);
  printOut("Area: " + area);
}

const myRectangle = {
  width: 10,
  height: 5,
};

printRectangleProperties(myRectangle);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(value, type) {
  let celsius, fahrenheit, kelvin;

  if (type === "C") {
    celsius = value;
    fahrenheit = Math.round((celsius * 9) / 5 + 32);
    kelvin = Math.round(celsius + 273.15);

    // Celsius
    printOut(`Convert ${value} Celsius:`);
    printOut(`  Celsius: ${celsius}`);
    printOut(`  Fahrenheit: ${fahrenheit}`);
    printOut(`  Kelvin: ${kelvin}`);
  } else if (type === "F") {
    fahrenheit = value;
    celsius = Math.round(((fahrenheit - 32) * 5) / 9);
    kelvin = Math.round(((fahrenheit - 32) * 5) / 9 + 273.15);

    // Fahrenheit
    printOut(`Convert ${value} Fahrenheit:`);
    printOut(`  Celsius: ${celsius}`);
    printOut(`  Fahrenheit: ${fahrenheit}`);
    printOut(`  Kelvin: ${kelvin}`);
  } else if (type === "K") {
    kelvin = value;
    celsius = Math.round(kelvin - 273.15);
    fahrenheit = Math.round(((kelvin - 273.15) * 9) / 5 + 32);

    // kelvin
    printOut(`Convert ${value} Kelvin:`);
    printOut(`  Celsius: ${celsius}`);
    printOut(`  Fahrenheit: ${fahrenheit}`);
    printOut(`  Kelvin: ${kelvin}`);
  } else {
    console.log("Invalid temperature type. Use 'C', 'F', or 'K'.");
    return;
  }

  printOut("---------------");
}

convertTemperature(47, "C");
convertTemperature(100, "F");
convertTemperature(300, "K");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateNetPrice(gross, vatGroup) {
  let vatPercentage;

  if (vatGroup === "normal") {
    vatPercentage = 25;
  } else if (vatGroup === "food") {
    vatPercentage = 15;
  } else if (vatGroup === "hotel" || vatGroup === "transport" || vatGroup === "cinema") {
    vatPercentage = 10;
  } else {
    printOut("Unknown VAT group!");
    return NaN;
  }

  let netPrice = (100 * gross) / (vatPercentage + 100);

  return netPrice;
}

let gross1 = 250; // Gross price normal
let gross2 = 150; // Gross price food
let gross3 = 110; // Gross price hotel
let gross4 = 200; // Gross price unknown

printOut("Net price for normal VAT (25%): " + calculateNetPrice(gross1, "normal"));
printOut("Net price for food VAT (15%): " + calculateNetPrice(gross2, "food"));
printOut("Net price for hotel VAT (10%): " + calculateNetPrice(gross3, "hotel"));
printOut("Net price for unknown VAT group (goblins): " + calculateNetPrice(gross4, "goblins"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateMotion(distance, time, speed) {
  if (speed === undefined && distance !== undefined && time !== undefined) {
    return distance / time;
  } else if (time === undefined && distance !== undefined && speed !== undefined) {
    return distance / speed;
  } else if (distance === undefined && time !== undefined && speed !== undefined) {
    return speed * time;
  } else {
    return NaN;
  }
}

printOut("Speed (Distance: 100, Time: 2): " + calculateMotion(100, 2)); // Calculates speed
printOut("Time (Distance: 100, Speed: 50): " + calculateMotion(100, undefined, 50)); // Calculates time
printOut("Distance (Speed: 50, Time: 2): " + calculateMotion(undefined, 2, 50)); // Calculates distance
printOut("Invalid input (more than one parameter missing): " + calculateMotion(undefined, undefined, 50)); // Returns NaN

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function adjustString(text, maxSize, char, insertBefore) {
  if (text.length < maxSize) {
    let missingLength = maxSize - text.length;
    let result = text;

    if (insertBefore) {
      for (let i = 0; i < missingLength; i++) {
        result = char + result;
      }
    } else {
      for (let i = 0; i < missingLength; i++) {
        result = result + char;
      }
    }

    return result;
  } else {
    return text;
  }
}

let text1 = "Dette er en tekst";
let maxSize1 = 30;
let char1 = "!";
let insertBefore1 = true;

let text2 = "Det er dette også";
let maxSize2 = 30;
let char2 = "?";
let insertBefore2 = false;

printOut(adjustString(text1, maxSize1, char1, insertBefore1));
printOut(adjustString(text2, maxSize2, char2, insertBefore2));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testIfMathIsFun() {
  let op = 1;
  let line = 1;
  // Left side
  let ok = false;
  do {
    let sumLeft = 0;
    for (let left = 0; left < line + 1; left++) {
      sumLeft += op;
      op++;
    }

    let sumRight = 0;
    for (let right = 0; right < line; right++) {
      sumRight += op;
      op++;
    }

    if (sumLeft !== sumRight) {
      ok = false;
      printOut("Error in line " + line.toString());
    } else {
      ok = true;
    }
    line++;

    if (line > 200) {
      printOut("Math is Fun!");
      break;
    }
  } while (ok);
}

testIfMathIsFun();

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    let result = n * factorial(n - 1);
    return result;
  }
}

let number = 9;
let result = factorial(number);
printOut("Factorial for " + number + " is " + result);

printOut(newLine);
