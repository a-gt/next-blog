import styled from "styled-components";

const BlockQuote = styled.blockquote`
  position: relative;
  font-family: "Sanchez", serif;
  font-size: 2.4em;
  line-height: 1.5em;
  font-style: italic;
  &:before {
    content: "\201C";
    position: absolute;
    top: 0.25em;
    left: -0.15em;
    color: rgba(255, 255, 255, 0.4);
    font-size: 6em;
    z-index: -1;
  }
`;

export function Quote({ children }) {
  return (
    <BlockQuote>
      <p>{children}</p>
    </BlockQuote>
  );
}
