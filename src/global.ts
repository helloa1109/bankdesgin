import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
  box-sizing: border-box;
}

:root {
  --white-color-100: #fff;
}

html, body {
  height: 100%;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.main {
  min-height: calc(100dvh - 674px);
  flex-direction: column;
}

.mainflex {
  isolation: isolate;
  display: flex;
}

.test {
  display: flex;
  isolation: isolate;
}

.flex {
  flex-direction: column;
  flex: 1 1;
}

.box { 
  box-sizing: border-box;
}
`;
