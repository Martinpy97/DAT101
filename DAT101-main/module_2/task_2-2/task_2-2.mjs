"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
2 + 3 * 
printOut("Replace this with you answer!");
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
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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