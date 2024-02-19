/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function RollDice({ currentDice, rollDices }) {
    
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button className="focus:outline-none" onClick={rollDices}>
        <img src={`/Images/Dices/dice_${currentDice}.png`} alt="Dice" className="w-20 " />
     </button>
    </div>
  );
}

export default RollDice;
