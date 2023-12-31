import { getCssText } from "@ignite-ui/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function DOcument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/Name=BookOpen.ico"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style id="stiches" dangerouslySetInnerHTML={{ __html: getCssText }} />
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
      <script src="https://kit.fontawesome.com/dba38b786e.js"></script>
    </Html>
  );
}
