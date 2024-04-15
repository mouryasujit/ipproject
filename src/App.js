import React from "react";
import Game from "./components/game/Game";
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header mb-3 mt-1 bg-light text-dark">
        <h1>2 Truths and 1 Lie</h1>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;