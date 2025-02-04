"use strict"
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { gameProps, EgameStatusType, spawnSequence } from "./SimonSays.mjs";



export class TcolorButton extends libSprite.TSpriteButton{
    constructor (aSpriteCanvas, aSpriteInfo){
        super(aSpriteCanvas, aSpriteInfo, aSpriteInfo.dst);
        this.sound = null;
        
    }

    // A.P.I.E (Abstraction, Polymorphism, Inheritance, Encapsulation)
    // vi må løse dette med polymorphism når musa er over smultringen.
    isMouseInside(aPoint){
        // Først sjekker vi om musa er innenfor firkanten som omslutter smultringen.
        let isInside = super.isMouseInside(aPoint);
        // Hvis musa er innenfor firkanten, sjekker vi om musa er utenfor radius 1 og innenfor radius 2.
        if(isInside){
            const dx = aPoint.x - gameProps.GameCenter.x;
            const dy = aPoint.y - gameProps.GameCenter.y;
            const dist = Math.hypot(dx, dy);
            isInside = (dist >= this.spi.dst.r1) && (dist <= this.spi.dst.r2);
        }
        return isInside;
    }


    // vi må løse dette med polymorphism når musa trykkes ned på smultringen.
    onMouseDown(aPoint){
        this.index = 1;
        this.sound.play();
    }

    onLeave(aEvent){
        if(aEvent.buttons !== 0){
            this.index = 0;
            this.sound.stop();
        }
    }

    // vi må løse dette med polymorphism når musa slippes på smultringen.
    onMouseUp(aPoint){
        if(this.index != 1) return;
        this.index = 0;
        this.sound.stop();
        if(gameProps.status !== EgameStatusType.player){
            return;
        }
        if(gameProps.activeButton === this){
            console.log("riktig knapp")
            if(gameProps.seqIndex < gameProps.sequence.length -1){
                gameProps.seqIndex++;
                gameProps.activeButton = gameProps.sequence[gameProps.seqIndex];
            }else{
                //nå er vi på sist knapp i sekvensen, computeren sin tur
                gameProps.spnRound.value++;
                spawnSequence();
            }
        }else{
            console.log("feil knapp")
            
            gameProps.buttonStartEnd.index = 1;
            gameProps.buttonStartEnd.visible = true;
        }
    }


}// End of TcolorButton class