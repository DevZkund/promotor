const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

// List of static routes in your app
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
];

// Dynamic service routes (Example: Replace with actual service slugs from a database)
const serviceRoutes = [
  '/service/digitalMarketing',
  '/service/graphicDesigning',
  '/service/webDevelopment',
  '/service/traditionalMarketing',
];

const baseUrl = 'https://promotrworld.in';

(async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });

  // Add static routes
  routes.forEach((route) => {
    sitemap.write({ url: route, changefreq: 'daily', priority: 0.8 });
  });

  // Add dynamic service routes
  serviceRoutes.forEach((route) => {
    sitemap.write({ url: route, changefreq: 'weekly', priority: 0.7 });
  });

  sitemap.end();

  // Generate XML and save it to the public directory
  const sitemapXml = await streamToPromise(sitemap);
  fs.writeFileSync(
    path.resolve(__dirname, 'public', 'sitemap.xml'),
    sitemapXml.toString()
  );

  console.log('✅ Sitemap successfully generated at public/sitemap.xml');
})();
