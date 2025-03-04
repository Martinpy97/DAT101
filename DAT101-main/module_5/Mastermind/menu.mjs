"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import { GameProps, SpriteInfoList} from "./Mastermind.mjs";
import MastermindBoard from "./MastermindBoard.mjs";

export class Tmenu {
    #buttonNewGame;
    #buttonCheckAnswer;
    #buttonCheat;
    #panelHide;

    constructor(aSpriteCanvas) {
        
        this.#buttonNewGame = 
        new libSprite.TSpriteButton(aSpriteCanvas, SpriteInfoList.ButtonNewGame, MastermindBoard.ButtonNewGame);

        this.#buttonCheckAnswer = 
        new libSprite.TSpriteButton(aSpriteCanvas, SpriteInfoList.ButtonCheckAnswer, MastermindBoard.ButtonCheckAnswer);

        this.#buttonCheat =
        new libSprite.TSpriteButton(aSpriteCanvas, SpriteInfoList.ButtonCheat, MastermindBoard.ButtonCheat);

        this.#panelHide =
        new libSprite.TSpriteButton(aSpriteCanvas, SpriteInfoList.PanelHideAnswer, MastermindBoard.PanelHideAnswer);
        this.#buttonCheat.onClick = this.onHintClick;

        


    }

    draw(){
        this.#buttonNewGame.draw();
        this.#buttonCheckAnswer.draw();
        this.#buttonCheat.draw();
        this.#panelHide.draw();
        
    }

    onHintClick = () => {
        this.#panelHide.visible = !this.#panelHide.visible;
    }

    onCheckAnswerClick = () => {
        const answerObject = {color : 0, pos: -1}
        const computeranswerlist = [];
        for(let i = 0; i < 4; i++){
            const obj = Object.create(answerObject);
            const computerAnswer = GameProps.computerAnswers[i];
            obj.color = computerAnswer.index;
            obj.pos = i;
            computeranswerlist.push(obj);
        }
        const playerAnswerList = [];
        }
}