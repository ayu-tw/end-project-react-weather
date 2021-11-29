import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="weatherApp">Weather App</h1>
        <Weather defaultCity="Munich" />
        <footer>
          This project was coded by{" "}
          <a href="https://loving-mcnulty-cc94fa.netlify.app" target="_blank">
            AnYu Huang
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ayu-tw/end-project-react-weather"
            target="_blank"
          >
            open-resourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}

export default App;
