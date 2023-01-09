import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://cdn.splitbee.io/sb.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
