import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import useMeadiQuery from "../src/hooks/useMediaQuery";

const Heading = styled.p`
  font-weight: 700;
  font-size: 15px;
  padding: 0;
  margin: 0;
  color: white;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding-left: 10px;
  list-style: none;
`;

const StyledLi = styled.li`
  margin: 10px 0;
  transition: all 300ms ease-in-out;
`;

const StyledLink = styled.a`
  --color: #919eab;
  display: inline-block;
  color: var(--color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 300ms ease-in-out;

  &:hover {
    color: white;
  }
`;

const Container = styled.div`
  position: ${(props) => (props.sticky ? "sticky" : "relative")};
  top: 0;
  padding-top: ${(props) => (!props.desktop ? "10x" : "80px")};
`;

const SVG = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  & > path {
    transition: all 300ms ease;
    fill: transparent;
    stroke: tomato;
    stroke-width: 3px;
    stroke-dasharray: 0 0 0 1000;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export default function TOCTree({ tocTree }) {
  const activeHeadingId = useActiveHeading(tocTree);
  let [navItemsState, setNavItems] = useState([]);
  let nav = useRef();
  let navPath = useRef();
  const desktop = useMeadiQuery();

  useEffect(() => {
    let navListItems = [...nav.current.querySelectorAll("li")],
      navItems = navListItems
        .map((listItem) => {
          const anchor = listItem.querySelector("a"),
            targetID = anchor && anchor.getAttribute("href").slice(1),
            target = document.getElementById(targetID);

          return { listItem, anchor, target, slug: targetID };
        })
        .filter((item) => item.target);
    setNavItems(navItems);

    let path = [],
      pathIndent;

    navItems.forEach((item, i) => {
      const x = item.anchor.offsetLeft - 5,
        y = item.anchor.offsetTop,
        height = item.anchor.offsetHeight;

      if (i === 0) {
        path.push("M", x, y, "L", x, y + height);
        item.pathStart = 0;
      } else {
        if (pathIndent !== x) path.push("L", pathIndent, y);

        path.push("L", x, y);

        navPath.current.setAttribute("d", path.join(" "));
        item.pathStart = navPath.current.getTotalLength() || 0;
        path.push("L", x, y + height);
      }

      pathIndent = x;
      navPath.current.setAttribute("d", path.join(" "));
      item.pathEnd = navPath.current.getTotalLength();
    });
  }, []);

  useEffect(() => {
    const navItems = navItemsState;
    const someElsAreVisible = () => activeHeadingId,
      pathLength = navPath.current.getTotalLength();

    let pathStart = pathLength,
      pathEnd = 0,
      lastPathStart,
      lastPathEnd;

    let item = navItems.filter(({ slug }) => slug === activeHeadingId)[0];
    if (item) {
      pathStart = Math.min(item.pathStart, pathStart);
      pathEnd = Math.max(item.pathEnd, pathEnd);
    }
    if (someElsAreVisible() && pathStart < pathEnd) {
      if (pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
        const dashArray = `1 ${pathStart} ${pathEnd - pathStart} ${pathLength}`;

        navPath.current.style.setProperty("stroke-dashoffset", "1");
        navPath.current.style.setProperty("stroke-dasharray", dashArray);
        navPath.current.style.setProperty("opacity", 1);
      }
    } else {
      navPath.current.style.setProperty("opacity", 0);
      //navPath.current.style.setProperty("stroke-dasharray", "0 0 0 1000");
    }

    lastPathStart = pathStart;
    lastPathEnd = pathEnd;
  }, [activeHeadingId, navItemsState]);

  return (
    <Container sticky={desktop} activeHeadingId={activeHeadingId}>
      <Heading>TABLE OF CONTENTS</Heading>
      <StyledUl ref={nav}>
        <SVG xmlns="http://www.w3.org/2000/svg">
          <path ref={navPath} />
        </SVG>
        {tocTree.map((heading, index) => {
          return (
            <StyledLi
              key={index}
              style={{
                paddingLeft: (heading.lvl - 2) * 20,
                marginLeft: activeHeadingId === heading.slug ? "5px" : 0
              }}
            >
              <StyledLink
                style={{
                  "--color":
                    activeHeadingId === heading.slug ? "tomato" : "#919eab"
                }}
                href={"#" + heading.slug}
              >
                {heading.content}
              </StyledLink>
            </StyledLi>
          );
        })}
      </StyledUl>
    </Container>
  );
}

const useActiveHeading = (headings) => {
  const [activeHeadingId, setActiveHeading] = useState(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.pageYOffset === 0) {
        return setActiveHeading(null);
      }

      let headingBoxes = headings.map(({ slug }) => {
        const elem = document.querySelector(`#${slug}`);
        return {
          slug,
          box: elem?.getBoundingClientRect() || { top: 0, bottom: 0 }
        };
      });

      const TOP_OFFSET = 100;
      let firstHeadingInViewport = headingBoxes.find(({ box }) => {
        return box.bottom > TOP_OFFSET && box.top < window.innerHeight;
      });

      if (!firstHeadingInViewport) {
        const reversedBoxes = [...headingBoxes].reverse();

        firstHeadingInViewport = reversedBoxes.find(({ box }) => {
          return box.bottom < TOP_OFFSET;
        });
      }

      if (!firstHeadingInViewport) {
        setActiveHeading(null);
      } else if (firstHeadingInViewport.slug !== activeHeadingId) {
        setActiveHeading(firstHeadingInViewport.slug);
      }
    }, 500);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeHeadingId, headings]);

  return activeHeadingId;
};

export const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(null, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(null, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
