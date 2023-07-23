import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta name="apple-itunes-app" content="app-id=1549449518" />
        <meta name="google-play-app" content="app-id=ru.hh.android" />
        <link rel="apple-touch-icon" href="imgs/apple-touch-icon.png" />
        <link rel="android-touch-icon" href="android-icon.png" />
        {/* <link rel="stylesheet" href="node_modules/smart-app-banner/dist/smart-app-banner.css" type="text/css" media="screen" /> */}
        <Script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js" />
        <Script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging.js" />
 

      </Head>
      <body>
        <Script src="node_modules/smart-app-banner/dist/smart-app-banner.css" />
        <Script src="node_modules/smart-app-banner/dist/smart-app-banner.js" />
        <Script src="/sb.js" />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBGVFTK"
          height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>

        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
