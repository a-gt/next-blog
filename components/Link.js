import Link from "next/link";
import styled from "styled-components";

const StyledA = styled.a`
  color: inherit;
  text-decoration: underline;
  cursor: pointer;
  text-decoration-color: var(--divider-color);
  text-decoration-thickness: 2px;
  transition: all 0.15s;

  &:hover {
    color: var(--site-color);
    text-decoration-color: currentcolor;
  }
`;

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      {!href.startsWith("http") ? (
        <Link as={as} href={href}>
          <StyledA {...otherProps} />
        </Link>
      ) : (
        <StyledA
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...otherProps}
        />
      )}
    </>
  );
}
