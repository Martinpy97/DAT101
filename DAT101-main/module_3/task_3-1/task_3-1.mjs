"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime <= 7) {
  printOut('Wakeup time is ' + wakeUpTime + " o'clock, I can take the bus to school.");

}else if (wakeUpTime == 8){
  printOut("Wakeup time is " + wakeUpTime + "You can take the train to school");
}
else{
  printOut("Wakeup time is " + wakeUpTime + " You have to take the car to school");
}
printOut(newLine);





printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number = 5;

if (number >1 )  {
  printOut("Verdien av tallet er " + number + ": Tallet er positivt. ")
}else if(number <0){
  printOut("Verdien av tallet er " + number + ": Tallet er negativt. ")
}else{
  printOut("Verdien av tallet er 0. ")
}

printOut(newLine);

printOut("--- Part 6 and 7----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSize = Math.floor(Math.random() * 8) +1;
if (imageSize >= 6){
  printOut("Bildet er over 6MP og er for stort til å brukes.")
}

else if (imageSize >= 4){
  printOut("Du kan bruke bildet.")
}
else if (imageSize < 4){
  printOut("Bildet er mindre enn 4MP og er for lite.")
}
  
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["Januar", "Februar", "Mars", "April", "Mai",
  "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes("r")) {
  printOut("Måneden er " + monthName + ": du må ta vitamin D.")
}
else {
  printOut("Måneden er " + monthName + ": du trenger ikke å ta vitamin D.")
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


let daysInMonth;
if (monthName === "Januar" || monthName === "Mars" || monthName === "Mai" || 
    monthName === "Juli" || monthName === "August" || monthName === "Oktober" || 
    monthName === "Desember") {
  daysInMonth = 31;
} else if (monthName === "April" || monthName === "Juni" || monthName === "September" || 
           monthName === "November") {
  daysInMonth = 30;
} else if (monthName === "Februar") {
  daysInMonth = 28; // ikke skuddår
}
printOut("Det er " + daysInMonth + " dager i " + monthName);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "Mars" || monthName === "Mai") {
  printOut("Vi pusser opp, Galleriet er stengt!")
}
else if(monthName === "April") {
  printOut("Galleriet er midlertidig åpent i nabobygget ut April!")
}
else{
  printOut("Galleriet er åpent som vanlig i " + monthName + ", Velkommen!")
};


printOut(newLine);
