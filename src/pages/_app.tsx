import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="Next level boilerplate for SSR React project powered by Typescript and Styled Components"
        />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}

export default App;
