// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://richyelectricals.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://richyelectricals.com/sitemap-services.xml',
      ],
    },
    exclude: ['/admin', '/private', '/api'],
    outDir: './public',
  };