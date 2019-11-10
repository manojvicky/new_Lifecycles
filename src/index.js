import React from "react";
import ReactDOM from "react-dom";
import App1 from "./App/App";
import Scroll from "./Scroll/Scroll";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Scroll />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
