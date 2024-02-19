import React, { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import Rules from "./Rules";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showingRules, setShowingRules] = useState(false); // State variable to control showing/hiding rules

  const genRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDices = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const randomNumber = genRandomNumber(1, 6);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const showRules = () => {
    setShowingRules(true); // Set showingRules to true when "Show Rules" button is clicked
  };

  return (
    <div>
      <TotalScore score={score} />
      <div className="flex justify-center items-center flex-col">
        <div className="mt-6">
          <NumberSelector
            error={error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <div className="">
          <RollDice currentDice={currentDice} rollDices={rollDices} />
        </div>
        <div className="flex justify-center ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 w-30 h-14 mx-1"
            onClick={resetScore}
          >
            Reset Score
          </button>
          <button
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 w-30 h-14 mx-1"
            onClick={showRules}
          >
            Show Rules
          </button>
        </div>
        {/* Conditionally render Rules component */}
        {showingRules && <Rules />}
      </div>
    </div>
  );
}

export default GamePlay;
