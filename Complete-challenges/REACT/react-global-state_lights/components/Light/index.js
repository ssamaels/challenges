import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, isOn, toggleLight }) {
  return (
    <LightButton type="button" onClick={toggleLight} isOn={isOn}>
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
