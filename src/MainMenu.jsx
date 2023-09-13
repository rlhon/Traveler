import React, { useState } from "react";
import "./index.css";
import RulePopup from "./components/RulePopup";

export const MainMenu = ({ handleChangePage }) => {

    return (
        <>
            <h1 className='header' style={{backgroundColor: "#DEEFF5",
                marginTop: 100, marginBottom:'100px',
                }}>
                Traveler
            </h1>
            <div style={{ display: 'flex', justifyContent:'center'}}>
                <button className='menu-button' 
                    onClick={() => handleChangePage('game')}
                >
                    Start Game
                </button>
            </div>
            <div style={{ display: 'flex', justifyContent:'center'}}>
                <RulePopup />
            </div>
        </>
    )
}