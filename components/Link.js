import Link from "next/link";
import styled from "styled-components";

const StyledA = styled.a`
  --hover-color: var(--accent-color);
  color: inherit;
  text-decoration: underline;
  cursor: pointer;
  text-decoration-color: var(--underline-color);
  text-decoration-thickness: 2px;
  transition: all 0.15s;

  &:hover {
    color: var(--hover-color);
    text-decoration-color: currentcolor;
  }
`;

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      {href?.startsWith("http") ? (
        <StyledA
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...otherProps}
        />
      ) : (
        <Link as={as} href={href} passHref>
          <StyledA {...otherProps} />
        </Link>
      )}
    </>
  );
}
