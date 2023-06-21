import "./EntryForm.css";
import Button from "../Button/Button.js";

export default function EntryForm() {
  return (
    <form className="entry-form">
      <h1>NEW ENTRY</h1>
      <label for="motto" className="motto_label">
        <strong>Motto:</strong>
      </label>
      <input type="text" name="motto" id="motto" cols="30" rows="5"></input>
      <label for="notes" className="notes_label">
        <strong>Notes:</strong>
      </label>
      <textarea
        type="text"
        name="notes"
        id="notes"
        cols="30"
        rows="20"
      ></textarea>
      <Button type="submit">CREATE</Button>
    </form>
  );
}
