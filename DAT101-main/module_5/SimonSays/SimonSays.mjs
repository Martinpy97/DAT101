"use strict";
//--------------- Objects and Variables ----------------------------------//
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { TcolorButton } from "./colorButton.mjs";


// prettier-ignore
export const SpriteInfoList = {
  Background:     { x: 0, y:    0, width: 720, height: 720, count:  1 },
  ButtonYellow:   { x: 0, y:  720, width: 314, height: 314, count:  2, dst: { x:  29, y: 377, r1: 100, r2: 333 } },
  ButtonBlue:     { x: 0, y: 1034, width: 314, height: 314, count:  2, dst: { x: 377, y: 377, r1: 100, r2: 333 } },
  ButtonRed:      { x: 0, y: 1348, width: 314, height: 314, count:  2, dst: { x: 377, y:  29, r1: 100, r2: 333 } },
  ButtonGreen:    { x: 0, y: 1662, width: 314, height: 314, count:  2, dst: { x:  29, y:  29, r1: 100, r2: 333 } },
  ButtonStartEnd: { x: 0, y: 1976, width: 360, height: 360, count:  2, dst: { x: 180, y: 180, r1:   1, r2: 180 } },
  number:         { x: 0, y: 2344, width:  23, height:  34, count: 10, dst: { x: 365, y: 385}},
};

const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

export const EgameStatusType = {idle: 0, computer: 1, player: 2, gameover: 3};

export const gameProps = {
  Background: new libSprite.TSprite(spcvs, SpriteInfoList.Background, new lib2d.TPoint(0, 0)),
  
  GameCenter: new lib2d.TPosition(SpriteInfoList.Background.width / 2, SpriteInfoList.Background.height / 2),
  status: EgameStatusType.computer,
  //prettier-ignore
  colorButtons:[
    new TcolorButton(spcvs, SpriteInfoList.ButtonYellow),
    new TcolorButton(spcvs, SpriteInfoList.ButtonBlue),
    new TcolorButton(spcvs, SpriteInfoList.ButtonRed),
    new TcolorButton(spcvs, SpriteInfoList.ButtonGreen),
    
  ],
  sequence: [],
  seqIndex: 0, //index for å holde styr på hvilken knapp i sekvensen vi er på
  activeButton: null, //ingen knapp er aktiv i starten
 
};



//--------------- Functions ----------------------------------------------//
function loadGame(){
  cvs.width = gameProps.Background.width;
  cvs.height = gameProps.Background.height;
  gameProps.sequence.push(gameProps.colorButtons[0]); //simulerer at vi har en sekvens
  spawnSequence();

  drawGame();
}

function drawGame(){
  spcvs.clearCanvas();
  gameProps.Background.draw();
 for (let i = 0; i < gameProps.colorButtons.length; i++){
  gameProps.colorButtons[i].draw();
 }

  requestAnimationFrame(drawGame);
}

function setMouseDown(){
  gameProps.activeButton.onMouseDown();
  setTimeout(setMouseUp, 1000);
  
}

function setMouseUp(){
  let done = false;
  if(gameProps.seqIndex < gameProps.sequence.length - 1){
    //her er det flere knapper i igjen i sekvensen
    gameProps.activeButton.onMouseUp();
    gameProps.seqIndex++;
  }else{
    //sekvensen er ferdig
    gameProps.activeButton.onMouseUp();
    gameProps.seqIndex = 0;
    done = true;
  }
  gameProps.activeButton = gameProps.sequence[gameProps.seqIndex];
  if(!done){
    setTimeout(setMouseDown, 1000);
  
}else{
  gameProps.status = EgameStatusType.player;//venter på at spilleren skal trykke på en knapp
}
}
function spawnSequence(){
  const index = Math.floor(Math.random() * gameProps.colorButtons.length);
  const button = gameProps.colorButtons[index];
  gameProps.sequence.push(button);
  gameProps.seqIndex = 0;
  gameProps.activeButton = gameProps.sequence[0];
  gameProps.status = EgameStatusType.computer;
  setTimeout(setMouseDown, 1000);
}
//--------------- Event Handlers -----------------------------------------//

//--------------- Main Code ----------------------------------------------//
spcvs.loadSpriteSheet("./media/spriteSheet.png", loadGame);