const fs = require('fs');
const path = require('path');

// Static pages on your site
const staticPages = [
  { slug: '', priority: 1.0 }, // Homepage
  { slug: 'about', priority: 0.8 },
  { slug: 'services', priority: 0.9 }, // Services hub page
  { slug: 'privacy-policy', priority: 0.6 },
  { slug: 'faq', priority: 0.7 },
  { slug: 'contact', priority: 0.8 },
  { slug: 'gallery', priority: 0.7 },
  { slug: 'sitemap', priority: 0.5 },
  { slug: 'terms-of-service', priority: 0.5 },
];

// Location pages
const locations = [
  { slug: 'london', priority: 0.8 },
  { slug: 'walsall', priority: 0.8 },
  { slug: 'birmingham', priority: 0.8 },
];

// Dynamic service pages
const services = [
  { slug: 'fuse-board-upgrades', updatedAt: new Date().toISOString(), priority: 0.8 },
  { slug: 'electrical-inspections', updatedAt: new Date().toISOString(), priority: 0.8 },
  { slug: 'new-installations', updatedAt: new Date().toISOString(), priority: 0.8 },
  { slug: 'fault-finding', updatedAt: new Date().toISOString(), priority: 0.7 },
  { slug: 'garden-lighting', updatedAt: new Date().toISOString(), priority: 0.7 },
  { slug: 'rewiring', updatedAt: new Date().toISOString(), priority: 0.8 },
  { slug: 'emergency-services', updatedAt: new Date().toISOString(), priority: 0.9 }
];

// Generate the sitemap XML
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add static pages
  staticPages.forEach(page => {
    const url = page.slug ? `https://www.richyelectricals.co.uk/${page.slug}` : 'https://www.richyelectricals.co.uk';
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
  });

  // Add location pages
  locations.forEach(location => {
    sitemap += `  <url>
    <loc>https://www.richyelectricals.co.uk/locations/${location.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${location.priority}</priority>
  </url>\n`;
  });

  // Add service pages
  services.forEach(service => {
    sitemap += `  <url>
    <loc>https://www.richyelectricals.co.uk/services/${service.slug}</loc>
    <lastmod>${service.updatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${service.priority}</priority>
  </url>\n`;
  });

  sitemap += `</urlset>`;
  return sitemap;
};

// Write to sitemap.xml in public directory
const writeSitemap = () => {
  const sitemapContent = generateSitemap();
  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemapContent);
  console.log('✅ Sitemap generated at: public/sitemap.xml');
};

writeSitemap();
