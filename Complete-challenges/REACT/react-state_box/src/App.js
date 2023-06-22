import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    // console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
