import "./EntryForm.css";
import Button from "../Button/Button.js";
import { useState } from "react";

export default function EntryForm({ onAddEntry }) {
  const [motto, setMotto] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { motto, notes };
    onAddEntry(newEntry);
    setMotto("");
    setNotes("");
  };

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      {" "}
      <h1>NEW ENTRY</h1>
      <label htmlFor="motto" className="motto_label">
        {" "}
        <strong>Motto:</strong>
      </label>
      <input
        type="text"
        name="motto"
        id="motto"
        cols="30"
        rows="5"
        value={motto}
        onChange={(e) => setMotto(e.target.value)}
      ></input>
      <label htmlFor="notes" className="notes_label">
        {" "}
        <strong>Notes:</strong>
      </label>
      <textarea
        type="text"
        name="notes"
        id="notes"
        cols="30"
        rows="20"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <Button type="submit">CREATE</Button>
    </form>
  );
}
