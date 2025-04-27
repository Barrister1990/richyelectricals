// scripts/generate-services-sitemap.js
const fs = require('fs');
const path = require('path');

// Services from your site
const services = [
  {
    slug: 'fuse-board-upgrades',
    updatedAt: new Date().toISOString(),
    priority: 0.8
  },
  {
    slug: 'electrical-inspections',
    updatedAt: new Date().toISOString(),
    priority: 0.8
  },
  {
    slug: 'new-installations',
    updatedAt: new Date().toISOString(),
    priority: 0.8
  },
  {
    slug: 'fault-finding',
    updatedAt: new Date().toISOString(),
    priority: 0.7
  },
  {
    slug: 'garden-lighting',
    updatedAt: new Date().toISOString(),
    priority: 0.7
  },
  {
    slug: 'rewiring',
    updatedAt: new Date().toISOString(),
    priority: 0.8
  },
  {
    slug: 'emergency-services',
    updatedAt: new Date().toISOString(),
    priority: 0.9
  }
];

// Generate sitemap XML content
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  services.forEach(service => {
    sitemap += `
  <url>
    <loc>https://richyelectricals.co.uk/services/${service.slug}</loc>
    <lastmod>${service.updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${service.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const outputPath = path.join(process.cwd(), 'public', 'sitemap-services.xml');
  
  fs.writeFileSync(outputPath, sitemap);
  console.log('Services sitemap generated at: public/sitemap-services.xml');
};

writeSitemap();