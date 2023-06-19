import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Sum valueA={5} valueB={7} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return valueA + valueB;
}
