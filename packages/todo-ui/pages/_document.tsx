import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>todone</title>
          <meta charSet="utf-8" key="charSet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0" key="viewport" />
          <meta name="description" content="Todone is web service for managing todo tasks." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

