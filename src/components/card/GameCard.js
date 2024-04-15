import React from "react";
import "./card.css"; // Import the CSS file

function GameCard({ players }) {
  return (
    <div className="container1 mt-4  justify-content-center"> {/* Applying container class */}
      {players.length > 0 && <h2>Players Joined</h2>}
      <ul className="player-list "> {/* Applying player-list class */}
        {players.map((player, index) => (
          <li key={index} className="font-size-md">{player}</li>
        ))}
      </ul>
      {/* Add more game card UI here */}
    </div>
  );
}

export default GameCard;
