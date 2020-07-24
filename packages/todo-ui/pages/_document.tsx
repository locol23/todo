import Document, { Html, Head, Main, NextScript } from 'next/document'
import { extractCss } from 'goober'

class MyDocument extends Document<{ css: ReturnType<typeof extractCss> }> {
  static getInitialProps({ renderPage }) {
    const page = renderPage()

    // Extrach the css for each page render
    const css = extractCss()
    return { ...page, css }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>todone</title>
          <meta charSet="utf-8" key="charSet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0" key="viewport" />
          <meta name="description" content="Todone is web service for managing todo tasks." />
          <link rel="icon" href="/favicon.ico" />
          <style id={'_goober'} dangerouslySetInnerHTML={{ __html: ' ' + this.props.css }} />
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
