import fs from "fs";
import matter from "gray-matter";
import Link from "../components/Link";
import path from "path";
import Layout from "../components/Layout";
import PostLink from "../components/PostLink";
import Head from "next/head";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import styled from "styled-components";
import Highlight from "../components/Highlight";
import PostList from "../components/PostList";

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

export default function Index({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Grid>
        <div>
          <h1>
            Hey there, This is my <Highlight>Blog</Highlight>!
          </h1>
          <p>
            This is a blog example template. This example shows how a simple
            blog might be built using the <code>next-mdx-remote</code> library,
            which allows mdx content to be loaded via{" "}
            <code>getStaticProps</code> or <code>getServerSideProps</code>. The
            mdx content is loaded from a local folder, but it could be loaded
            from a database or anywhere else.
          </p>
        </div>
        <PostList posts={posts}/>
      </Grid>
      {/*<Links>
          {posts.map((post) => (
            <PostLink
              key={post.filePath}
              path={post.filePath}
              image="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
              {...post.data}
            ></PostLink>
          ))}
        </Links>*/}
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
