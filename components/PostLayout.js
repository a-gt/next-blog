import styled from "styled-components";
import useMeadiQuery from "../src/hooks/useMediaQuery";

const Layout = styled.div`
  display: grid;
  margin: 0;
  padding: 10px 0;
  min-width: 350px;
  grid: auto / 200px minmax(300px, 600px);
  align-items: start;
  justify-content: center;
`;

export default function PostLayout({ children, toc }) {
  const desktop = useMeadiQuery();
  if (toc && desktop) {
    return <Layout>{children}</Layout>;
  } else {
    return children;
  }
}
