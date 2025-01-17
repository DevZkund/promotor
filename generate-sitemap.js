const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

// List of routes in your app
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/service',
];

// Base URL of your website
const baseUrl = 'https://promotrworld.in';

(async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });

  // Add each route to the sitemap
  routes.forEach((route) => {
    sitemap.write({ url: route, changefreq: 'daily', priority: 0.8 });
  });

  sitemap.end();

  // Generate XML and save it to the public directory
  const sitemapXml = await streamToPromise(sitemap);
  fs.writeFileSync(
    path.resolve(__dirname, 'public', 'sitemap.xml'),
    sitemapXml.toString()
  );

  console.log('Sitemap successfully generated at public/sitemap.xml');
})();
