import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    --site-color: tomato;
    --background-color: #161c24;
    --divider-color: rgba(255, 255, 255, 0.4);
  }

  html {
    font: 100%/1.5 "Inter", sans-serif;
    background: var(--background-color);
    color: white;
  }

  h1,
  p {
    margin-bottom: 1.5rem;
  }

  ::-webkit-scrollbar {
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
  }

  pre {
    border-radius: 10px;
  }

  code {
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(110, 118, 129, 0.4);
    border-radius: 6px;
  }
`;

export default GlobalStyles;
