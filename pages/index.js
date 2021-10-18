import fs from "fs";
import matter from "gray-matter";
import Link from "../components/Link";
import path from "path";
import Layout, { Section } from "../components/Layout";
import Head from "next/head";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import styled, { keyframes } from "styled-components";
import Highlight from "../components/Highlight";
import PostList from "../components/PostList";
import useMeadiQuery from "../src/hooks/useMediaQuery";

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
  padding-left: 5px;
  transform: translateY(2.5px);
`;

const bounce = keyframes`
  0%, to {
    transform: translateY(-25%) rotate(90deg);
    -webkit-animation-timing-function: cubic-bezier(.8,0,1,1);
    animation-timing-function: cubic-bezier(.8,0,1,1);
  }

  50% {
    transform: translateY(0) rotate(90deg);
    -webkit-animation-timing-function: cubic-bezier(0,0,.2,1);
    animation-timing-function: cubic-bezier(0,0,.2,1);
  }
`;

const ScrollReminder = styled.p`
  display: block;
  padding: 10px;
  position: absolute;
  bottom: 3.5rem;
  font-size: 0.8em;
  animation: ${bounce} 1s infinite;
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
  color: rgb(147, 157, 165);
`;

const Text = styled.p`
  color: rgb(161, 161, 170);
`

export default function Index({ posts }) {
  const desktop = useMeadiQuery();

  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Section style={{ minHeight: "100vh" }}>
        <Grid>
          <div>
            <h1>
              Hey there, I am <Highlight>Apexio</Highlight>!
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
        {desktop ? (
          <>
            <ScrollReminder style={{ left: "10%" }}>
              Scroll Down
              <Icon
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right"
                className="svg-inline--fa fa-arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                ></path>
              </Icon>
            </ScrollReminder>
            <ScrollReminder style={{ right: "10%" }}>
              Scroll Down
              <Icon
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right"
                className="svg-inline--fa fa-arrow-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                ></path>
              </Icon>
            </ScrollReminder>
          </>
        ) : (
          ""
        )}
      </Section>

      <Section medium>
        <h2>About Me</h2>
        <h4>./README.md</h4>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut deleniti
          voluptatem facere deserunt eos quibusdam natus sed. Omnis unde atque
          ab cum pariatur alias, deserunt consectetur laudantium praesentium
          cumque nihil! Rerum, praesentium. Tempore reprehenderit veritatis
          repellat eligendi quod. Perferendis reiciendis natus officia. Sequi
          esse atque perspiciatis nisi ex nihil voluptatem odit excepturi eius,
          eveniet repudiandae aspernatur ullam nemo neque nesciunt! Ab quos quas
          deserunt eveniet animi! Fugit ea quae distinctio. Minus sequi
          temporibus libero consectetur ratione, saepe architecto iste quod
          sapiente delectus dolorem nulla quibusdam excepturi beatae tempora
          soluta vitae! Magni commodi nemo fugit cum aliquid dolorem officiis
          cupiditate harum, eveniet blanditiis nobis dolor in non dolores quasi,
          mollitia asperiores. Quasi illum voluptas magni consequuntur non
          ducimus dolorum odit tempore! Totam minima dolores porro earum sit et
          quibusdam deleniti quod, ratione quas exercitationem maiores tempora
          repudiandae nesciunt sapiente repellat voluptatem placeat animi
          praesentium accusamus amet illo cum labore? Ad, quis!
        </Text>
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
