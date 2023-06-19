import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Meow🐱</h2>
      <label htmlFor="text">prrr</label>
      <input id="text"></input>
      <a className="article__link" href="https://en.wikipedia.org/wiki/Meow">
        meow?
      </a>
    </article>
  );
}
