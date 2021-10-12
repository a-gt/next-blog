import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  color: inherit;
`;

export function ListItem({children}) {
  return <StyledLi>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-3 text-green-500 transform transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      {children}
  </StyledLi>
}

export const List = styled.ul`
  list-style: none;
`