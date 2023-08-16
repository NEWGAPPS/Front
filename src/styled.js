import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body{
    relative;
    background-color: #231B2D;  
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Roboto', sans-serif;
    color: white;
    --1호선: #0052A4;
    --2호선: #56BC32;
    --3호선: #EF7C1C;
    --4호선: #00A5DE;
    --5호선: #975CE2;
    --6호선: #CD7C2F;
    --7호선: #747F00;
    --8호선: #E6186C;
    --9호선: #C19E20;
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: white;
  }

  button{
    background-color: #FFFFFF;
    color: #8D8F9F;
    border: 1px solid #B9B9B9;
    font-weight: Bold;
    height: 38px;
  }
  
  button.refresh{
    background-color: #634CEB;
    color: white;
  }

  `;

export default GlobalStyles;
