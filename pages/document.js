// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

<Head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="سطر هي وكالة تسويق رقمي سعودية..." />
  <meta name="keywords" content="..." />

  {/* Google tag (gtag.js) */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-08S7E28LJG"></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-08S7E28LJG');
    `
  }} />
</Head>


class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="سطر هي وكالة تسويق رقمي سعودية، نصنع حضورًا رقميًا متكاملًا من المحتوى حتى الإعلانات، ونقودك بنتائج حقيقية." />
          <meta name="keywords" content="وكالة تسويق رقمي, سطر, تسويق إلكتروني, تصميم هويات, إدارة إعلانات, محتوى عربي, تحسين محركات البحث, خدمات تسويق رقمية في السعودية" />
        </Head>
        <body className="bg-[#030712] text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
