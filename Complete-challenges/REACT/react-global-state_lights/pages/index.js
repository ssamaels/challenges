import Link from "../components/Link";
import { useState } from "react";

export default function HomePage() {
  const [turnedOnCount, setTurnedOnCount] = useState(0);
  const [lights, setLights] = useState([
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: false },
    { id: "3", name: "Bedroom", isOn: false },
    { id: "4", name: "Bathroom", isOn: false },
    { id: "5", name: "Garage", isOn: false },
    { id: "6", name: "Porch", isOn: false },
    { id: "7", name: "Garden", isOn: false },
    { id: "8", name: "Office", isOn: false },
  ]);

  function toggleLight(id) {
    setLights((lights) =>
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
    setTurnedOnCount((lights) => {
      const updatedCount = lights.filter((light) => light.isOn).length;
      return updatedCount;
    });
  }
  return (
    <div>
      <h1>Home</h1>
      <p>{turnedOnCount} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
