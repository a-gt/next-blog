import Head from "next/head";
import GlobalStyles from "../src/globalStyles";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://ghcdn.rawgit.org/PrismJS/prism-themes/master/themes/prism-duotone-dark.css"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
);

export default App;
