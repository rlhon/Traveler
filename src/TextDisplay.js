import React, { useState } from "react";
import "./index.css";

const TextDisplay = ({ handleChangePage, options }) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    return(
        <>
            {options[0]}
            <div className="rectangle">
            </div>
            <h1 className='header' style={{position:'relative', top:'970px',
                fontWeight:'normal'
                }}>
                What would you like to do?
            </h1>
            <button className="game-button" style={{left: '15px'}} >
                Choice1
            </button>
            <button className="game-button" style={{right:'15px'}} id="choice2">
                Choice 2
            </button>
      
        </>
    );
};

export default TextDisplay;