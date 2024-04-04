// App.js
import React from "react";
import GameDashboard from "./components/GameDashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>2 Truths and 1 Lie</h1>
      </header>
      <main>
        <GameDashboard />
      </main>
    </div>
  );
}

export default App;
