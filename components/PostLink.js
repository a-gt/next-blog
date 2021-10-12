import styled from "styled-components";
import Link from "./Link";
import { useRouter } from "next/router";

const Layout = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  margin: 10px;
  border: 2px solid rgba(110, 118, 129, 0.1);
  background-color: rgba(110, 118, 129, 0);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;

  h3 {
    transition: all 0.2s;
  }

  &:hover {
    border: 2px solid #3be8b0;

    h3 {
      color: #3be8b0;
    }

    a {
      color: #3be8b0;
      text-decoration-color: #3be8b0;
    }
  }
`;

export default function PostLink({ title, description, path, image }) {
  const router = useRouter();
  return (
    <Layout
      onClick={(e) => {
        e.preventDefault();
        router.push("/posts/" + path.replace(/\.mdx?$/, ""));
      }}
    >
      <div style={{ padding: "10px" }}>
        <h3>{title}</h3>
        {image ? <img src={image} width="200px" /> : <></>}
      </div>
    </Layout>
  );
}
