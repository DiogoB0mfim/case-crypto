import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    scrollbar-width: none;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    background-color: #f3f4f6;
    color: #0C0D22;
    font-family: "IBM Plex Sans", sans-serif;
  }
`;

export default GlobalStyle;