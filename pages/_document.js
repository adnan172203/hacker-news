import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang='en-US'>
        <Head>
          <meta
            name='description'
            content='hacker news clone'
          />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta name='viewport' content='width=device-width' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
