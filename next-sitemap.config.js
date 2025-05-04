// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.richyelectricals.co.uk',
  generateRobotsTxt: true,
  outDir: './public',

  exclude: ['/admin', '/private', '/api'],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.richyelectricals.co.uk/sitemap-services.xml',
    ],
  },
};
