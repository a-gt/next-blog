import Head from "next/head";
import GlobalStyles from "../src/globalStyles";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link href="./Ilisarniq.css" rel="stylesheet" />
      <link href="./Typist.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link
        href="https://ghcdn.rawgit.org/PrismJS/prism-themes/master/themes/prism-dracula.css"
        rel="stylesheet"
      />
      <script src="https://kit.fontawesome.com/d5a86ff847.js" crossOrigin="anonymous"></script>
    </Head>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
);

export default App;
