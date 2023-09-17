import "./App.css";
import React from "react";
import Question from "./Question";

function App({ question, options}) {
  return (<div className="App">
    <Question question = {question} options = {options}/>
  </div>
  );
}

export default App;