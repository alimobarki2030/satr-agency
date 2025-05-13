// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

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
