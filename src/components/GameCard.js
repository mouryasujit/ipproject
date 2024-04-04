// components/GameCard.js
import React from "react";

function GameCard({ players }) {
  return (
    <div>
      {players.length > 0 && <h2>Players Joined</h2>}
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      {/* Add more game card UI here */}
    </div>
  );
}

export default GameCard;
