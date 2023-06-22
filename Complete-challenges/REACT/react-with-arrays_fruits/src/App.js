import Card from "./components/Card";
import { fruits } from "./components/fruits";

export default function App() {
  return (
    <div className="app">
      <ul>
        {fruits.map(({ id, name, color }) => (
          <Card key={id} name={name} color={color} />
        ))}
      </ul>
    </div>
  );
}
