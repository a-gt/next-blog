import styled from "styled-components";
import Link from "./Link";
import { useRouter } from "next/router";

const Layout = styled.div`
  min-width: 200px;
  max-width: 200px;
  min-height: 200px;
  border-radius: 10px;
  margin: 10px;
  border: 2px solid rgba(110, 118, 129, 0.4);
  background-color: rgba(110, 118, 129, 0.4);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;

  h3 {
    transition: all 0.2s;
  }

  &:hover {
    border: 2px solid tomato;

    h3 {
      color: tomato;
    }

    a {
      color: tomato;
      text-decoration-color: tomato;
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
      {image ? <img src={image} width="200px" /> : <></>}
      <div style={{ padding: "10px" }}>
        <h3>{title}</h3>
        <p style={{ fontSize: "0.9em" }}>{description}</p>
        <Link
          href={"/posts/[slug]"}
          as={"/posts/" + path.replace(/\.mdx?$/, "")}
        >
          Read More
        </Link>
      </div>
    </Layout>
  );
}
