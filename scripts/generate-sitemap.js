// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://globesourceprocurement.com';
const BUILD_DIR = 'build';
const PUBLIC_DIR = 'public';

// All your site pages with metadata
const PAGES = [
  {
    url: '/',
    changeFreq: 'weekly',
    priority: '1.0',
    title: 'Global Procurement & Sourcing Solutions'
  },
  {
    url: '/about',
    changeFreq: 'monthly',
    priority: '0.8',
    title: 'About Us - Leading Global Procurement Company'
  },
  {
    url: '/services',
    changeFreq: 'monthly',
    priority: '0.9',
    title: 'Our Services - Complete Procurement Solutions'
  },
  {
    url: '/#how-it-works',
    changeFreq: 'monthly',
    priority: '0.7',
    title: 'How It Works - Simple 3-Step Process'
  },
  {
    url: '/vendors',
    changeFreq: 'weekly',
    priority: '0.8',
    title: 'Vendor Registration - Submit Your Products'
  },
  {
    url: '/buyers',
    changeFreq: 'weekly',
    priority: '0.8',
    title: 'Buyer Requests - Find Global Suppliers'
  },
  {
    url: '/contact',
    changeFreq: 'monthly',
    priority: '0.6',
    title: 'Connecting businesses worldwide through trusted procurement solutions. Contact us today!'
  }
];

function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

function generateSitemap() {
  const currentDate = getCurrentDate();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${PAGES.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

function generateRobots() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl delay
Crawl-delay: 1

# Allow important pages
Allow: /
Allow: /about

# Allow important assets
Allow: /static/images/
Allow: /images/
Allow: /favicon.ico

# Disallow build artifacts
Disallow: /static/js/
Disallow: /static/css/
Disallow: /*.json$`;

  return robots;
}

function generateSEOFiles() {
  console.log('🚀 Generating sitemap and robots.txt...');

  try {
    // Generate files for both public (dev) and build (production)
    const directories = [PUBLIC_DIR];
    
    // Also add to build directory if it exists
    if (fs.existsSync(BUILD_DIR)) {
      directories.push(BUILD_DIR);
    }

    directories.forEach(dir => {
      // Ensure directory exists
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Generate sitemap.xml
      const sitemapPath = path.join(dir, 'sitemap.xml');
      fs.writeFileSync(sitemapPath, generateSitemap());
      console.log(`✅ Generated ${sitemapPath}`);

      // Generate robots.txt
      const robotsPath = path.join(dir, 'robots.txt');
      fs.writeFileSync(robotsPath, generateRobots());
      console.log(`✅ Generated ${robotsPath}`);
    });

    console.log('🎉 SEO files generated successfully!');
    
  } catch (error) {
    console.error('❌ Error generating SEO files:', error);
    process.exit(1);
  }
}

// Run the generator
generateSEOFiles();

module.exports = { generateSEOFiles, generateSitemap, generateRobots };