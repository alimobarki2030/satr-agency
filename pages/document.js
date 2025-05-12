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

          {/* وسوم OG (فيسبوك وواتساب) */}
          <meta property="og:title" content="سطر | وكالة تسويق رقمي تصنع حضورك بنتائج حقيقية" />
          <meta property="og:description" content="سطر وكالة سعودية متخصصة في المحتوى والإعلانات وتحسين الظهور، نقودك بنتائج ملموسة." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.satr.agency/" />
          <meta property="og:image" content="https://www.satr.agency/og-banner.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* وسوم تويتر */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="سطر | وكالة تسويق رقمي تصنع حضورك بنتائج حقيقية" />
          <meta name="twitter:description" content="وكالة تسويق رقمي سعودية تقدم خدمات المحتوى، التصميم، الإعلانات، والسيو." />
          <meta name="twitter:image" content="https://www.satr.agency/og-banner.png" />
          <meta name="twitter:url" content="https://www.satr.agency/" />
          <meta name="twitter:site" content="@satragency_" />
          <meta name="twitter:creator" content="@satragency_" />
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
