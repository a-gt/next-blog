import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  .hamburger,
  .cross {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .hamburger span {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 2px;
    margin-bottom: 3px;
    overflow: hidden;
    position: relative;
  }
  .hamburger span:last-child {
    margin: 0;
  }
  .hamburger span:before,
  .hamburger span:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(250, 250, 250);
    transform: translateX(-200%);
    transition: transform ease 300ms;
  }
  .hamburger span:before {
    transform: translateX() (${(props) => (props.active ? "100%" : "-200%")});
  }
  .hamburger span:after {
    transform: translateX(${(props) => (props.active ? "200%" : "0")});
  }
  .hamburger span:nth-child(2):before,
  .hamburger span:nth-child(2):after {
    transition-delay: 75ms;
  }
  .hamburger span:last-child:before,
  .hamburger span:last-child:after {
    transition-delay: 150ms;
  }
  ${(props) =>
    !props.active
      ? `
  &:hover .hamburger span:before {
    transform: translateX(0);
  }
  &:hover .hamburger span:after {
    transform: translateX(200%);
  }
  `
      : ""}
  .cross span {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background-color: rgb(250, 250, 250);
    transform: translateY(50%) rotate(45deg)
      scaleX(${(props) => (props.active ? "1" : "0")});
    transition: transform ease ${(props) => (props.active ? 450 : 200)}ms;
  }
  .cross span:last-child {
    transform: translateY(-50%) rotate(-45deg)
      scaleX(${(props) => (props.active ? "1" : "0")});
  }
`;

export default function HamburgerButton({ onClick = () => {} }) {
  const [open, setOpen] = useState(false);

  return (
    <Container
      active={open}
      onClick={(e) => {
        e.preventDefault();
        setOpen(!open);
        onClick(e);
      }}
    >
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="cross">
        <span></span>
        <span></span>
      </div>
    </Container>
  );
}
