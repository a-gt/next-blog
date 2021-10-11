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

  pre {
    border-radius: 10px;
  }

  code {
    font-family: 'Noto Sans Mono', monospace;
  }
`;

export default GlobalStyles;
