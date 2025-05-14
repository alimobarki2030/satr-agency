/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.satr.agency',
  generateRobotsTxt: true, // ينشئ تلقائيًا robots.txt
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/404'], // استثنِ أي صفحات لا تريدها في السايت ماب
};
