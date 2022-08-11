import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    font-size: 16px;
  }

  body {
    background: #181821;
    color: #fcfcfc;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
