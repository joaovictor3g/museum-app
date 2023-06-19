import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="og:image" content="/banner.png" />
        <meta name="image" property="og:image" content="/banner.png" />
        <meta name="og:title" content="Museu Metropolitano de arte" />
        <meta
          name="og:description"
          content="Detalhamento de obras do Museu Metropolitano de Arte."
        />

        <link rel="shortcut icon" href="/favicon.svg" />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
