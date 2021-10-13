import fs from "fs";
import matter from "gray-matter";
import Link from "../components/Link";
import path from "path";
import Layout, { Section } from "../components/Layout";
import PostLink from "../components/PostLink";
import Head from "next/head";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import styled, { keyframes } from "styled-components";
import Highlight from "../components/Highlight";
import PostList from "../components/PostList";
import useAtTop from "../src/hooks/useAtTop";

const Grid = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  width: calc(100% - 40px);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const Icon = styled.svg`
  height: 1em;
`;

const bounce = keyframes`
  0%, to {
      transform: translateY(-25%) translateX(-50%);
      -webkit-animation-timing-function: cubic-bezier(.8,0,1,1);
      animation-timing-function: cubic-bezier(.8,0,1,1)
  }

  50% {
      transform: translateX(-50%);
      -webkit-animation-timing-function: cubic-bezier(0,0,.2,1);
      animation-timing-function: cubic-bezier(0,0,.2,1)
  }
`;

const ScrollReminder = styled.p`
  display: block;
  padding: 10px;
  position: fixed;
  transform: translateX(-50%);
  top: calc(100% - 100px);
  left: 50%;
  background-color: rgba(110, 118, 129, 0.4);
  border-radius: 10px;
  animation: ${bounce} 1s infinite;
`;

export default function Index({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Section style={{ minHeight: "100vh" }}>
        <Grid>
          <div>
            <h1>
              Hey there, This is my <Highlight>Blog</Highlight>!
            </h1>
            <p>
              This is a blog example template. This example shows how a simple
              blog might be built using the <code>next-mdx-remote</code>{" "}
              library, which allows mdx content to be loaded via{" "}
              <code>getStaticProps</code> or <code>getServerSideProps</code>.
              The mdx content is loaded from a local folder, but it could be
              loaded from a database or anywhere else.
            </p>
          </div>
          <PostList posts={posts} />
        </Grid>
        <ScrollReminder>
          <Icon
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angles-down"
            className="svg-inline--fa fa-angles-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"
            ></path>
          </Icon>{" "}
          Scroll Down{" "}
          <Icon
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angles-down"
            className="svg-inline--fa fa-angles-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"
            ></path>
          </Icon>
        </ScrollReminder>
      </Section>
      <Section>
        <h2>About Me</h2>
        <h4>./README.md</h4>
        <p></p>
      </Section>
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
