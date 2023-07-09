import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

function handleTurnAllLightsOff() {
  setLights((lights) => lights.map((light) => ({ ...light, isOn: false })));
}

function handleTurnAllLightsOn() {
  setLights((lights) => lights.map((light) => ({ ...light, isOn: true })));
}

export default function Actions() {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        handleTurnAllLightsOff={handleTurnAllLightsOff}
        handleTurnAllLightsOn={handleTurnAllLightsOn}
      />
    </>
  );
}
