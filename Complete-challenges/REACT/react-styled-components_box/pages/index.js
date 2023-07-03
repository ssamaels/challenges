import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
// import BoxWithStyledComponents from "../components/BoxWithClassName/BoxWithStyledComponents.js";
import StyledBox from "../components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Flexed>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      {/* <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack /> */}
      <StyledBox />
      <StyledBox isBlack />
    </Flexed>
  );
}

const Flexed = styled.div`
  display: flex;
  flex-direction: row;
`;
