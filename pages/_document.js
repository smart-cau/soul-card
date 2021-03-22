import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head >
          <meta charSet={`UTF-8`} />
          <link rel="icon" href="/favicon.ico" />
          <meta name={`description`} content={`The Soul Card Project`}/>
          <meta name={'keywords'} content={`soul card`}/>
          <!-- Google Tag Manager -->
          <script src={'/js/gtm.js'}></script>
          <!-- End Google Tag Manager -->
        </Head>
        <body>
          <Main />
          <NextScript />
          <!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WF3BWH2"
                            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <!-- End Google Tag Manager (noscript) -->
        </body>
      </Html>
    )
  }
}

export default MyDocument