import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    console.log("Whazzup?!😎");
  };

  return (
    <div className="App">
      <Button
        color="purple"
        backgroundColor="lightgreen"
        text="Click me!"
        handleClick={handleClick}
      />
    </div>
  );
}

function Button({ color, disabled, text, backgroundColor, handleClick }) {
  return (
    <button
      style={{ color, backgroundColor, height: "50px" }}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
