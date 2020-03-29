import { createGlobalStyle } from 'styled-components';
import backgroung from '../assets/background.jpg';

const GlobalStyle = createGlobalStyle`
   * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: 0;
 }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  #root {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
  }

  body {
    font-family: "Open Sans", sans-serif;
    display: flex;
    justify-content: center;
    background-image: url(${backgroung});
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
     outline: 0;
  }

  button a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default GlobalStyle;
