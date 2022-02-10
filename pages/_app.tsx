import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
