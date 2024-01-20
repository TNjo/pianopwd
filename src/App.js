import React from "react";
import "./App.css";
import Piano from "./Piano";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>React Piano</h1>
        </center>
      </header>
      <div>
        <Piano />
      </div>
    </div>
  );
}

export default App;
