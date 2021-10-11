import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "./Link";

const Wrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  padding: 1.5rem;
  margin-top: 70px;
`;

const Toolbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 100;
  transition: all 0.1s ease-in-out;
  backdrop-filter: blur(12px);
`;

const ToolbarContent = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 20px);
  height: 100%;

  h1 {
    padding: 0;
    margin: 0;

    a {
      text-decoration: none;
    }
  }

  ul {
    list-style: none;

    li {
      padding: 0;
      margin: 0 10px;
      display: inline;
    }
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <Toolbar>
        <ToolbarContent>
          <h1>
            <Link href={"/"}>Blog</Link>
          </h1>
          <ul>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/"}>About Me</Link>
            </li>
          </ul>
        </ToolbarContent>
      </Toolbar>
      <Wrapper>{children}</Wrapper>
    </>
  );
}
