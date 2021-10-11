import fs from "fs";
import matter from "gray-matter";
import Link from "../components/Link";
import path from "path";
import Layout from "../components/Layout";
import PostLink from "../components/PostLink";
import Head from "next/head";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import styled from "styled-components";

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

export default function Index({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog - Home Page</h1>
      <p>
        Here are some <code>poems</code> written by some famous poets:
      </p>
      <Links>
        {posts.map((post) => (
          <PostLink
            key={post.filePath}
            path={post.filePath}
            image="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
            {...post.data}
          ></PostLink>
        ))}
      </Links>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
