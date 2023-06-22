import "./Tag.css";

export default function Tag({ role }) {
  const tagClass = role === "admin" ? "tag--highlight" : null;

  return <span className={`tag ${tagClass}`}>{role}</span>;
}
