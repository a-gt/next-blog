import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import Link from "../../components/Link";
import Layout from "../../components/Layout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import remarkSlug from "remark-slug";
import mdxPrism from "mdx-prism";
import GSlugger from "github-slugger";
import generateToc from "markdown-toc-unlazy";
import TOCTree from "../../components/TOCTree";
import PostLayout from "../../components/PostLayout";
import Quote from "../../components/Quote";

const components = {
  a: Link,
  TestComponent: dynamic(() => import("../../components/TestComponent")),
  Head,
  blockquote: Quote
};

export default function PostPage({ tocTree, source, frontMatter }) {
  return (
    <Layout>
      <Head>
        <title>Blog - {frontMatter.title}</title>
      </Head>
      <div id="intro" />
      <header>
        <nav>
          <Link href="/">👈 Go back home</Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <PostLayout toc={tocTree.length > 0}>
        {tocTree.length > 0 ? <TOCTree tocTree={tocTree} /> : <></>}
        <main>
          <MDXRemote {...source} components={components} />
        </main>
      </PostLayout>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header p {
          padding: 0;
          margin: 0;
        }

        .post-header {
          margin-bottom: 0;
        }

        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkSlug],
      rehypePlugins: [mdxPrism]
    },
    scope: data
  });

  const slugger = new GSlugger();

  const tocTree = generateToc(content, {
    slugify: (slug) => (slug ? slugger.slug(slug) : () => {})
  }).json;

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      tocTree
    }
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
