"use strict"
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { gameProps, EgameStatusType } from "./SimonSays.mjs";



export class TcolorButton extends libSprite.TSpriteButton{
    constructor (aSpriteCanvas, aSpriteInfo){
        super(aSpriteCanvas, aSpriteInfo, aSpriteInfo.dst);
        
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
    }
    // vi må løse dette med polymorphism når musa slippes på smultringen.
    onMouseUp(aPoint){
        this.index = 0;
        if(gameProps.status !== EgameStatusType.player){
            return;
        }
        if(gameProps.activeButton === this){
            console.log("riktig knapp")
        }else{
            console.log("feil knapp")
        }
    }


}// End of TcolorButton class