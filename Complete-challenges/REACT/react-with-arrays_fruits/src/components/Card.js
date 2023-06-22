import "./Card.css";
// import { fruits } from "./fruits";

export default function Card({ name, color }) {
  return (
    <p className="card" style={{backgroundColor:color}}> {name}</p>
  );
}
