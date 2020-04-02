import { createGlobalStyle } from 'styled-components';
import backgroung from '../assets/background.jpg';
import dark from '../assets/fundo_dark.png';

const GlobalStyle = createGlobalStyle`
   * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: 0;
 }

 html, body, #root {
   box-sizing: border-box;
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
    background-image: url(${props => props.typeTheme ? dark : backgroung});

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
     outline: 0!important;
  }

  button a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default GlobalStyle;
