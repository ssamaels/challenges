import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

@font-face {
  font-family: 'LotrFont';
  src: url('/Font/RingbearerMedium-51mgZ.ttf') format('truetype');
}
`;
