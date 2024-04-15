import React, { useState } from "react";
import GameLobby from "../lobby/GameLobby";
import GameCard from "../card/GameCard";
import TableComponent from "../table/TableComponent";
import DIsplayQuestions from "../display/DIsplayQuestions";
import data from "../assets/Data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import './game.css';
function Game() {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState([]);
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
    setAnswers(newanswer);
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
    setScore(scorearr);
    index = Math.floor(Math.random() * 40);
  };
  console.log(answers, scorearr, score);
  const joinGame = (playerName) => {
    setPlayers([...players, playerName]);
  };

  return (
    <div className="cont animated-background"> 
      {!gameStarted ? (
        <GameLobby startGame={startGame} joinGame={joinGame} className="row justify-content-center mt-5" /> 
      ) : (
        <GameCard players={players} className="row justify-content-center" /> 
      )}
      {!gameStarted && <GameCard players={players} className="row justify-content-center" />}
      {players.length > 0 && gameStarted && score.length > 0 ? (
        <TableComponent players={players} score={score} className="table table-striped mt-5" /> 
      ) : (
        !gameStarted && <h2 className="no-player text-center mt-5">No Player is Joined</h2>
      )}

      {gameStarted && <DIsplayQuestions index={index} />}
      {gameStarted && <button onClick={startGame} className="btn btn-warning mt-3 d-block btn1">Next</button>}

    </div>
  );
}

export default Game;
