import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Meow</Button>
      <Button>Growl</Button>
      <Button>Purrr</Button>
      <Button>Hiss</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
