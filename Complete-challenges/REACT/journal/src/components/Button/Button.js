import "./Button.css";

export default function Button({ children, type = "button" }) {
  return (
    <button type={type} name="button" class="createButton">
      {children}
    </button>
  );
}
