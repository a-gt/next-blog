import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* {
    margin: 0;
    padding: 0;
  }*/

  :root {
    --accent-color: #3be8b0;
    --background-color: rgb(24, 24, 27);
    --underline-color: rgba(255, 255, 255, 0.4);
    color-scheme: dark;
  }

  html {
    font: 100%/1.5 "Ilisarniq", sans-serif;
    background-image: url("https://blaze.now.sh/assets/images/noise.png");
    background-color: var(--background-color);
    background-size: 15%;
    color: white;
    padding: 0;
    margin: 0;
  }

  h1,
  p {
    margin-bottom: 1.5rem;
  }

  /*::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0); 
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(110, 118, 129, 0.4);
    border-radius: 3px;
    transition: background 0.1s;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(110, 118, 129, 0.6);
  }*/

  pre {
    border-radius: 10px;
  }

  code {
    font-family: 'Fira Code', monospace;
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(110, 118, 129, 0.4);
    border-radius: 6px;
  }
`;

export default GlobalStyles;
