import React, { useState } from "react";
import RulePopup from "./RulePopup";
//import "tailwindcss/tailwind.css";

const ButtonMenu = ({ handleChangePge }) => {
    return(
        <>
            <div style={{position: 'relative'}}>
                <progress className="health" id="hp" max="100" value="100"></progress>
                <img src="https://github.com/NandiniRam32/Summer2023Projects/blob/master/traveler/src/components/heart2.png?raw=true" 
                alt="Sorry, Not Found"
                width={"35px"} height={"35px"} 
                style={{position:'absolute', top:'16px', left:'15px'}}/>
            </div>
            <h1 style={{position: 'relative', top: '60px', left:'20px', fontSize: '18px',
                overflowX: 'hidden', width: '50px', fontWeight:'normal'}}>
                Time: 
            </h1>
            <div style={{position: 'absolute', right:'20px', top: '20px'}}>
                <RulePopup />
            </div>
        </>
    );

};

export default ButtonMenu;
