import React from 'react';

const StartGame = ({ toggle }) => (
    <div>
        <img src="/Images/dices.png" className="ml-20 mt-20" />
        <div className="ml-8">
            <h1 className="text-7xl font-bold">Dice Game</h1>
            <button
                className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-6 ml-40"
                onClick={toggle}>
                Play Now
            </button>
        </div>
    </div>
);

export default StartGame;
