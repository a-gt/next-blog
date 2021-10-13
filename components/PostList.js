import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typist from "react-typist";

const Container = styled.div`
  background-color: rgb(35, 42, 47);
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.18) 0px 70px 65px 0px, rgba(0, 0, 0, 0.14) 0px 30px 30px 0px,
    rgba(0, 0, 0, 0.12) 0px 15px 15px 0px, rgba(0, 0, 0, 0.1) 0px 10px 8px 0px,
    rgba(0, 0, 0, 0.08) 0px 4px 4px 0px, rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
`;

const Header = styled.div`
  margin: 0;
  padding: 0 20px;
  background: rgb(26, 32, 35);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  width: calc(100% - 40px);
  height: 3rem;
  display: flex;
  align-items: center;
  font-family: "Fira Code", monospace;

  p {
    padding: 0;
    margin: 0;
    color: rgb(147, 157, 165);
    font-weight: 500;
    font-size: 1em;
    font-family: "Fira Code", monospace;
  }
`;

const Body = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;

  p {
    font-family: "Fira Code", monospace;
    margin: 0;
    padding: 2px 2px;
    color: rgb(112, 122, 132);
  }
`;

const Posts = styled.div`
  padding-left: 10px;
`;

const Post = styled.a`
  display: inline;
  font-family: "Fira Code", monospace;
  width: fit-content;
  margin: 0;
  padding: 2px 2px;
  color: rgba(250, 250, 250);
  transition: all 0.1s;
  font-style: italic;
  text-decoration: none;

  &:hover {
    color: var(--site-color);
  }
`;

const TerminalInput = styled.span`
  font-family: "Fira Code", monospace;

  &:before {
    content: "$ ";
    color: var(--site-color);
    font-family: "Fira Code", monospace;
  }
`;

export default function PostList({ posts }) {
  return (
    <Container>
      <Header>
        <p>Terminal</p>
      </Header>
      <Body>
        {/*<div>
          {posts.map((_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
          <p>{posts.length + 1}</p>
        </div>*/}
        <Posts>
          <Typist startDelay={2000}>
            <TerminalInput>fetch next-blog/posts</TerminalInput>
            <br />
            <Typist.Delay ms={500}></Typist.Delay>
            Loading...
            <Typist.Backspace count={10} delay={500} />
            <u>{posts.length.toString()} posts found:</u> <br />
            {posts.map(({ data, ...post }, i) => (
              <span key={i}>
                <span style={{ color: "#E83A71" }}>{(i + 1).toString()}. </span>
                <Link
                  href={"/posts/" + post.filePath.replace(/\.mdx?$/, "")}
                  onClick={() => setClicked(post.filePath)}
                  passHref
                >
                  <Post>{data.title}</Post>
                </Link>
                <br />
              </span>
            ))}
            <TerminalInput>{""}</TerminalInput>
          </Typist>
        </Posts>
      </Body>
    </Container>
  );
}
