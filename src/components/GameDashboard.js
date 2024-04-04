// components/GameDashboard.js
import React, { useEffect, useState } from "react";
import GameLobby from "./GameLobby";
import GameCard from "./GameCard";
import TableComponent from "./TableComponent";
import DIsplayQuestions from "./DIsplayQuestions";
import data from "../assets/Data.json";

function GameDashboard() {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [answers, setanswers] = useState([]);
  const [score, setscore] = useState([]);
  var scorearr = [];
  var index = Math.floor(Math.random() * 40);

  const startGame = () => {
    // Implement logic to start the game
    // localStorage.removeItem("score");
    index = Math.floor(Math.random() * 40);
    setGameStarted(true);
    setTimeout(() => {
      startupLoop();
    }, 2000);
  };
  const startupLoop = () => {
    const newanswer = [];
    for (var i = 0; i < players.length; i++) {
      let promptstding = prompt(`${players[i]} turn Please Input your answer`);
      console.log(promptstding);
      newanswer.push(promptstding);
    }
    setanswers(newanswer);
    console.log(answers, newanswer);
    compareanswers(newanswer);
  };

  const compareanswers = (newanswer) => {
    console.log(newanswer);
    console.log(data[index].true_line);
    alert(`Correct answer was ${data[index].true_line}`);
    for (var i = 0; i < newanswer.length; i++) {
      if (score.length >= 3) {
        // console.log("inside");
        if (parseInt(newanswer[i]) === data[index].true_line) {
          scorearr[i] = score[i] + 1;
          alert(`🎉🎊 player ${players[i]} got right answer 🎉🎊 `);
        } else scorearr[i] = score[i] + 0;
      } else {
        if (parseInt(newanswer[i]) === data[index].true_line) {
          scorearr.push(1);
          alert(` 🎉🎊 player ${players[i]} got right answer 🎉🎊 `);
          console.log(scorearr[i]);
        } else {
          scorearr.push(0);
          console.log("inside");
        }
      }
    }
    setscore(scorearr);
    index = Math.floor(Math.random() * 40);
  };
  console.log(answers, scorearr, score);
  const joinGame = (playerName) => {
    setPlayers([...players, playerName]);
  };

  return (
    <div>
      {!gameStarted ? (
        <GameLobby startGame={startGame} joinGame={joinGame} />
      ) : (
        <GameCard players={players} />
      )}
      {!gameStarted && <GameCard players={players} />}
      {players.length > 0 && gameStarted && score.length > 0 ? (
        <TableComponent players={players} score={score} />
      ) : (
        !gameStarted && <h2>No Player is Joined</h2>
      )}

      {gameStarted && <DIsplayQuestions index={index} />}
      {gameStarted && <button onClick={startGame}>Next</button>}
    </div>
  );
}

export default GameDashboard;
