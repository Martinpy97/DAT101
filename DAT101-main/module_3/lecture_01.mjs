import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

//function sum(number1, number2) {
//  const result = number1 + number2;
//  return result;
//}
//
//const sum1 = sum(10, 10);
//
//printOut("sum 1 = " + sum1.toString());
//const sum2 = sum(10, 30);
//printOut("sum 2 = " + sum2.toString());
//const sum3 = sum(sum1, sum2);
//printOut("sum 3 = " + sum3.toString());
//

//let myText = ""; //Dette er en global variabel og kan brukes inne i funksjonen.
//
//function addText(newText) {
//  myText += newText;
//  const myVar = "Hei på deg"; //Dette er en lokal variabel kun synlig for funksjonen.
//}
//
//addText(" Hello world" + newLine);
//addText(newLine + " Dette er test 1");
//addText(newLine + " Dette er test 2");
//addText(newLine + " Dette er test 3");
//
//printOut(myText);

function canGoToTheMovies(personAge) {
  if (personAge >= 16) {
    return true;
  }
  //her kan det stå masse kode som programmet vil kjøre om det er false.
  return false;
}

let canGo = canGoToTheMovies(18);
printOut("canGo = " + canGo.toString());
