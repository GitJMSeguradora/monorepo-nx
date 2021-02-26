import tokens from "../styles/tokens";
import { palette } from "../styles/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Metropolis';
    src: url('https://static.juntoseguros.com/fonts/Metropolis/Metropolis-Regular.woff2') format('woff2'),
      url('https://static.juntoseguros.com/fonts/Metropolis/Metropolis-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Metropolis';
    src: url('https://static.juntoseguros.com/fonts/Metropolis/Metropolis-SemiBold.woff2') format('woff2'),
      url('https://static.juntoseguros.com/fonts/Metropolis/Metropolis-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Metropolis';
    src: url('https://static.juntoseguros.com/fonts/Metropolis/Metropolis-ExtraBold.woff2') format('woff2'),
      url('https://static.juntoseguros.com/fonts/Metropolis/Metropolis-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Metropolis", sans-serif;
  }

  html {
    font-size: 62.50%;
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    color: ${palette["color-dark"]};
    font-family: 'Metropolis';
    ${tokens.font.base};
  }
  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
