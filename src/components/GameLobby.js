// components/GameLobby.js
import React, { useState } from "react";

function GameLobby({ startGame, joinGame }) {
  const [playerName, setPlayerName] = useState("");

  const handleJoinGame = (e) => {
    e.preventDefault();
    // Call joinGame function passed from parent component
    joinGame(playerName);
    setPlayerName("");
  };

  return (
    <div>
      <h2>Game Lobby</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={handleJoinGame}>Join Game</button>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default GameLobby;
