import styled from "styled-components";

const BlockQuote = styled.blockquote`
  position: relative;
  font-style: italic;
  border-left: 4px solid rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  padding-left: 5px;

  p:before {
    content: '“';
    color: rgba(255, 255, 255, 0.4);
  }

  p:after {
    content: '” ' attr(cite);
    color: rgba(255, 255, 255, 0.4);
  }
`;

export default function Quote({ children }) {
  return (
    <BlockQuote>
      {children}
    </BlockQuote>
  );
}
