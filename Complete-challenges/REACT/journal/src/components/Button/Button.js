import "./Button.css";

export default function Button({ children, type = "button" }) {
  return (
    <button type={type} name="button" className="createButton">
      {children}
    </button>
  );
}
