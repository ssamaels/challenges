import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Smiley isHappy />
    </div>
  );
}

function Smiley({ isHappy }) {
  if (isHappy === true) {
    return "😊";
  } else {
    return "😔";
  }
}
