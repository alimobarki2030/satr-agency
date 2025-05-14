// next-seo.config.js
const config = {
  title: 'سطر | وكالة تسويق رقمي تصنع حضورك بنتائج حقيقية',
  description: 'وكالة سعودية متخصصة في الإعلانات، المحتوى، والتصميم، نقودك بنتائج ملموسة.',
  canonical: 'https://www.satr.agency',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://www.satr.agency',
    siteName: 'وكالة سطر',
    title: 'سطر | وكالة تسويق رقمي تصنع حضورك بنتائج حقيقية',
    description: 'وكالة سعودية متخصصة في الإعلانات، المحتوى، والتصميم، نقودك بنتائج ملموسة.',
    images: [
      {
        url: 'https://www.satr.agency/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'وكالة سطر',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@satragency_',
    site: '@satragency_',
    cardType: 'summary_large_image',
  },
};

export default config;
