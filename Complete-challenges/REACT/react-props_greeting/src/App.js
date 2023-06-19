import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Greeting name="Yair" />
    </div>
  );
}

function Greeting({ name }) {
  const coaches = ["Klaus", "Jan", "Marcell", "Yair", "Sven", "Gimena"];
  if (coaches.includes(name)) {
    return <h1>Hello, Coach!</h1>;
  } else {
    return <h1>Hello, {name}!</h1>;
  }
}
