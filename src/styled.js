import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  body{
    background-color: #231B2D;  
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Roboto', sans-serif;
    color: white;
  }
  a{
    text-decoration: none;
  }

  `;

export default GlobalStyles;
