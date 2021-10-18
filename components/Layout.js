import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "./Link";
import useMeadiQuery from "../src/hooks/useMediaQuery";
import useAtTop from "../src/hooks/useAtTop";
import HamburgerButton from "./HamburgerButton";

export const Section = styled.div`
  --width: ${props => props.medium ? 20 : 9}rem;
  --mobile-width: ${props => props.medium ? 17.5 : 6.5}rem;
  padding-top: 100px;
  box-sizing: border-box;
  padding-left: calc(var(--width) - var(--mobile-width));
  padding-right: calc(var(--width) - var(--mobile-width));
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding-left: var(--width);
    padding-right: var(--width);
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
    padding-left: var(--width);
    padding-right: var(--width);
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0;
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(161, 161, 170);
    margin-top: 0;
  }
`;

const Toolbar = styled.header`
  --blur: 12px;
  --height-shrink: -1rem;
  --saturate: 1.5;
  --opacity: 0.8;
  --border-opacity: 1;
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  padding-top: 1rem;
  z-index: 100;
  transform: translateY(var(--height-shrink));
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(var(--blur)) saturate(var(--saturate));
  background-color: rgba(24, 24, 27, var(--opacity));
  border-bottom: 1px solid rgba(39, 39, 42, var(--border-opacity));
`;

const ToolbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  box-sizing: border-box;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 9rem;
    padding-right: 9rem;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
    padding-left: 9rem;
    padding-right: 9rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.84rem;
    color: rgb(161, 161, 170);
    line-height: 1rem;
    letter-spacing: 0.05em;
    text-size-adjust: 100%;
    height: 22px;
    padding: 1rem 0;
  }

  ul {
    list-style: none;
    padding: 1rem 0;
    height: 22px;
    margin: 0;

    li {
      padding: 0;
      margin: 0;
      margin-left: 3.5rem;
      display: inline;

      & > ul {
        list-style: none;
        height: 22px;
        margin: 0;
        display: inline;

        li {
          padding: 0;
          margin: 0;
          margin-left: 1.25rem;
          display: inline;
        }
      }
    }
  }

  .svg {
    padding: 0;
    color: rgb(250, 250, 250);
    font-size: 2rem;
    height: 2rem;
    line-height: 2rem;

    &:hover {
      color: var(--accent-color);
      filter: drop-shadow(0 0 15px #3be8b0);
    }
  }
`;

export default function Layout({ children }) {
  const atTop = useAtTop();
  const desktop = useMeadiQuery();

  return (
    <>
      <Toolbar
        style={{
          "--blur": atTop ? 0 : "12px",
          "--height-shrink": atTop ? 0 : "-1rem",
          "--saturate": atTop ? 1 : 1.5,
          "--opacity": atTop ? 0 : 0.8,
          "--border-opacity": atTop ? 0 : 1,
        }}
      >
        <ToolbarContent>
          <Link href={"/"} className="svg">
            <svg
              width="2rem"
              height="2rem"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 711 934"
            >
              <path
                d="M220.536 693.736l169.505-391.717 80.899 251.572-125.2 70.532-125.204 69.613zm348.786 176.74l12.23 39.882h129.054l-29.471-77.542L402.418.315l-63.754 148.109L.807 933.321l108.83-55.159 53.452-29.053 53.452-29.054L466.27 679.861a1382.273 1382.273 0 0139.487-19.481l63.565 210.096z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
          {desktop ? (
            <ul>
              <li>
                <Link href={"/"}>Blog</Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  style={{ "--hover-color": "rgb(14, 165, 233)" }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <ul>
                  <li>
                    <Link
                      href={"https://www.github.com/ApexioDaCoder/next-blog"}
                      style={{ "--hover-color": "rgb(250, 250, 250)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transform: "translateY(5px)" }}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://mail.google.com"}
                      style={{ "--hover-color": "#CF3D2F" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ transform: "translateY(5px)" }}
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <HamburgerButton />
          )}
        </ToolbarContent>
      </Toolbar>
      {children}
    </>
  );
}