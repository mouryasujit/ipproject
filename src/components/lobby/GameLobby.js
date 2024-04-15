import React, { useState } from "react";
import "./lobby.css"; // Import the CSS file

function GameLobby({ startGame, joinGame }) {
  const [playerName, setPlayerName] = useState("");

  const handleJoinGame = (e) => {
    e.preventDefault();
    // Call joinGame function passed from parent component
    joinGame(playerName);
    setPlayerName("");
  };

  return (
    <div className="container"> {/* Applying container class */}
      <h2 className="text-center">Game Lobby</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      /> <br />
      <button onClick={handleJoinGame} className="btn btn-warning  mb-2 button-container">Join Game</button> <br />
  <button onClick={startGame} className="btn btn-warning button-container">Start Game</button>
    </div>
  );
}

export default GameLobby;
