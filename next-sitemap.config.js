// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://richyelectricals.co.uk',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://richyelectricals.co.uk/sitemap-services.xml',
      ],
    },
    exclude: ['/admin', '/private', '/api'],
    outDir: './public',
  };