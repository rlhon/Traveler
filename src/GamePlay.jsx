import React, { useState } from "react";
import "./index.css";
import ButtonMenu from "./components/ButtonMenu";
import TextDisplay from "./TextDisplay";

export const GamePlay = ({ handleChangePage, options }) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <>
            <ButtonMenu />
            <div className="rectangle">
            </div>
            <h1 className='header' style={{position:'relative', top:'970px',
                fontWeight:'normal'
                }}>
                What would you like to do?
            </h1>
            <button className="game-button" style={{left: '15px'}} >
                {options[getRandomInt(4)]}
            </button>
            <button className="game-button" style={{right:'15px'}} id="choice2">
                {options[getRandomInt(4)]}
            </button>
      
        </>
    )
}