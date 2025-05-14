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

          {/* ✅ Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-08S7E28LJG"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-08S7E28LJG');
            `
          }} />

          {/* ✅ Meta OG + Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="سطر | وكالة تسويق رقمي تصنع حضورك بنتائج حقيقية" />
          <meta name="twitter:description" content="وكالة تسويق رقمي سعودية تقدم خدمات المحتوى، التصميم، الإعلانات، والسيو." />
          <meta name="twitter:image" content="https://www.satr.agency/og-banner.png" />
          <meta name="twitter:url" content="https://www.satr.agency/" />
          <meta name="twitter:site" content="@satragency_" />
          <meta name="twitter:creator" content="@satragency_" />
          <meta property="og:title" content="سطر | وكالة تسويق رقمي تصنع حضورك بنتائج حقيقية" />
          <meta property="og:description" content="سطر وكالة سعودية متخصصة في المحتوى والإعلانات وتحسين الظهور، نقودك بنتائج ملموسة." />
          <meta property="og:image" content="https://www.satr.agency/og-banner.png" />
          <meta property="og:url" content="https://www.satr.agency/" />
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
