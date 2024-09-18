"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let answer1 = 2 + (3 * (2 - 4) * 6);
printOut("answer = " + answer1);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const millInInch = 25.4;
const millInMeters = 1000;
const meters = 25.34;
const answer = meters / millInMeters * millInInch;
const exactAnswer = answer.toFixed(2);
printOut('exact answer = ' + exactAnswer.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const secondsInMinute = 60;
const minutesInHour = 60;
const HoursInDay = 24;
const part3_answer =
(3 * HoursInDay * minutesInHour) + 
(12 * minutesInHour) + 
14 + 
(45 / secondsInMinute);

printOut('part3_answer = ' + part3_answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const numberOfMinutes = 6322.52;
let part4_calc = numberOfMinutes / (60 * 24);
const part4_days = Math.floor(part4_calc);
printOut("days = " + part4_days );

part4_calc = part4_calc - part4_days;
part4_calc = part4_calc * HoursInDay;
const part4_Hours = Math.floor(part4_calc);
printOut('Hours = ' + part4_Hours );

part4_calc = part4_calc - part4_Hours;
part4_calc = part4_calc * minutesInHour;
const part4_Minutes = Math.floor(part4_calc);
printOut('Minutes = '+ part4_Minutes);

part4_calc = part4_calc - part4_Minutes;
part4_calc = part4_calc * secondsInMinute;
const part4_Seconds = Math.floor(part4_calc);
printOut('Seconds = ' + part4_Seconds);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut(amountUSD + ' dollars is ' + amountNOK + ' kroner');
amountUSD = Math.round(amountNOK * USD);
printOut(amountNOK + ' kroner is ' + amountUSD + ' dollars');
printOut(newLine);




printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text = "There is much between heaven and earth that we do not understand.";
let numCharacters = text.length;
let char1 = text.charAt(19);
let char2 = text.substring(35, 35 + 8);
let index1 = text.indexOf('earth');


printOut(numCharacters.toString());
printOut(char1);
printOut(char2);
printOut(index1.toString());



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const verdi1 = 5 > 3;
const verdi2 = 7 >= 7;
const verdi3 = 'a' > 'b';
const verdi4 = '1' < 'a';
const verdi5 = '2500' < 'abcd';
const verdi6 = 'arne' != 'Thomas';
const verdi7 = (2 === 5);
const verdi8 = ('abcd' > 'bcd');


printOut('5 > 3 = ' + verdi1.toString());
printOut('7 >= 7 = ' + verdi2.toString());
printOut('a > b = ' + verdi3.toString());
printOut('1 < a = ' + verdi4.toString());
printOut('2500 < abcd = ' + verdi5.toString());
printOut('Arne != Thomas = ' + verdi6.toString());
printOut('(2 === 5) = ' + verdi7.toString());
printOut('abcd > bcd = ' + verdi8.toString());

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);