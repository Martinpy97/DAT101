"use strict"

import libSprite_v2 from "../../common/libs/libSprite_v2.mjs"
import { SheetData } from "./game.mjs"
import libSprite from "../../common/libs/libSprite_v2.mjs"
import { GameProps, EGameStatus } from "./game.mjs"
import { TBoardCell } from "./gameBoard.mjs"
import libsprite from "../../common/libs/libSprite.mjs"
import aPosition from "../../common/libs/lib2d.mjs"


export class Tmenu {
  #spcvs;
  #titleSprite;
  #playButtonSprite;

  constructor(aSpriteCanvas) {
    this.#spcvs = aSpriteCanvas;

    // Initialiser sprites for menyen
    this.#titleSprite = new libSprite.TSprite(aSpriteCanvas, SheetData.GameOver); // Bruk GameOver som tittel
    this.#titleSprite.x = 100; // Posisjon for tittelen
    this.#titleSprite.y = 50;

    this.#playButtonSprite = new libSprite.TSprite(aSpriteCanvas, SheetData.Play); // Play-knappen
    this.#playButtonSprite.x = 150; // Posisjon for Play-knappen
    this.#playButtonSprite.y = 300;
  }

  draw() {
    // Tegn tittelen
    this.#spcvs.drawSprite(SheetData.GameOver, this.#titleSprite.x, this.#titleSprite.y);

    // Tegn Play-knappen
    this.#spcvs.drawSprite(SheetData.Play, this.#playButtonSprite.x, this.#playButtonSprite.y);
  }

  handleClick(x, y) {
    // Sjekk om klikket er innenfor "Play"-knappens område
    if (
      x >= this.#playButtonSprite.x &&
      x <= this.#playButtonSprite.x + SheetData.Play.width &&
      y >= this.#playButtonSprite.y &&
      y <= this.#playButtonSprite.y + SheetData.Play.height
    ) {
      console.log("Play button clicked!");
      GameProps.gameStatus = EGameStatus.Playing; // Start spillet
    }
  }
}

