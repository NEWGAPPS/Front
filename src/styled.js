import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  font-family: 'Noto Sans KR', sans-serif;
  font-family: 'Roboto', sans-serif;
  word-break: keep-all;
  body{
    background-color: #231B2D;
    color : white;
  }
  `;
