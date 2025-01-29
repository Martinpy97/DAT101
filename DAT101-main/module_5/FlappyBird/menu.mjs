"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import { SpriteInfoList, GameProps, EGameStatus, starGame } from "./FlappyBird.mjs";

export class TMenu {
  #spFlappyBird;
  #spButtonPlay;
  #spNumber;
  #spInfoText;
  #spcvs;
  #activeSprite;
  #gameOver;
  #medal;
  #posScore;
  #posBestScore;
  #posPlayScore;
  #ranking= {first: 0, second: 0, third: 0};
  
  

  constructor(aSpriteCanvas) {
    this.#spcvs = aSpriteCanvas;
    const pos = new lib2d.TPosition(200, 100);
    /* bruk denne for å teste koden i annen status enn idle*/
    GameProps.status = EGameStatus.idle;

    this.#spFlappyBird = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.flappyBird, pos);

    pos.y = 300;
    pos.x = 240;

    this.#spButtonPlay = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.buttonPlay, pos);
    pos.x = 200;
    pos.y = 100;
    this.#spInfoText = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.infoText, pos);
    
    pos.x = 280;
    pos.y = 180;
    this.#spNumber = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.numberBig, pos);
    pos.x = 181;
    
    
    this.#gameOver = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.gameOver, pos);
    pos.x = 208;
    pos.y = 224;

    this.#medal = new libSprite.TSprite(aSpriteCanvas, SpriteInfoList.medal, pos);
    this.#spNumber.index = 3; //nedtelling start
  

    this.#spcvs.addEventListener("mousemove", this.#onMouseMove);
    this.#spcvs.addEventListener("click", this.#onClick);
    this.#activeSprite = null; //ingen aktive sprites enda

    this.#posScore = new lib2d.TPosition(380, 230);
    this.#posBestScore = new lib2d.TPosition(380, 270);
    this.#posPlayScore = new lib2d.TPosition(75, 50);
    


  }

  draw() {
    switch (GameProps.status) {
      case EGameStatus.idle:
        this.#spFlappyBird.draw();
        this.#spButtonPlay.draw();
        break;
      case EGameStatus.getReady:
        this.#spInfoText.index = 0;
        this.#spInfoText.draw();
        this.#spNumber.draw();
        break;
      case EGameStatus.gameOver:
        this.#gameOver.draw();
        this.#spInfoText.index = 1;
        this.#spInfoText.draw();
        this.#spButtonPlay.draw();
        this.#medal.index = 2;  
        this.#medal.draw();
        this.#spcvs.drawText(GameProps.score.toString(), this.#posScore);
        this.#spcvs.drawText(GameProps.bestScore.toString(), this.#posBestScore);
        
        break;
        case EGameStatus.playing:
          this.#spcvs.drawText(GameProps.score.toString(), this.#posPlayScore);
          break;
    }
  }

  incScore(aScore){
    GameProps.score += aScore;
    if (GameProps.score > this.#ranking.first){
      this.#ranking.third = this.#ranking.second;
      this.#ranking.second = this.#ranking.first;
      this.#ranking.first = GameProps.score;
      GameProps.bestScore = this.#ranking.first;
      this.#medal.index = 2;}
      else if (GameProps.score > this.#ranking.second){
        this.#ranking.third = this.#ranking.second;
        this.#ranking.second = GameProps.score;
        this.#medal.index = 1;
      }
      else if (GameProps.score > this.#ranking.third){
        this.#ranking.third = GameProps.score;
        this.#medal.index = 3;
      }else this.#medal.index = 0;

      }

      reset() {
        GameProps.score = 0;
        this.#spNumber.index = 3;
      }
  
  //ikke eksamen
  #onMouseMove = (aEvent) => {
    const pos = this.#spcvs.getMousePos(aEvent);
    const boundRect = this.#spButtonPlay.boundingBox;
    switch (GameProps.status) {
      case EGameStatus.idle:
        if (boundRect.isPositionInside(pos)) {
          this.#spcvs.style.cursor = "pointer";
          this.#activeSprite = this.#spButtonPlay;
        } else {
          this.#spcvs.style.cursor = "default";
          this.#activeSprite = null; //ingen aktiv sprite
        }
        break;
    }
  };

  #onClick = () => {
    if (this.#activeSprite === this.#spButtonPlay) {
      GameProps.status = EGameStatus.getReady;
      this.#spcvs.style.cursor = "default";
      setTimeout(this.#onCountDown, 1000);
    }
  };

  #onCountDown = () => {
    if (this.#spNumber.index > 0) {
      this.#spNumber.index--;
      setTimeout(this.#onCountDown, 1000);
    } else {
      starGame();
      
    }
  };
}// End of TMenu
