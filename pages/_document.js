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