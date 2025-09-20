// src/utils/generateSitemap.js
import fs from 'fs';
import path from 'path';

// Site configuration
const SITE_URL = 'https://globesourceprocurement.com';
const OUTPUT_DIR = 'public';

// Define all your site pages
const STATIC_PAGES = [
  {
    url: '/',
    changeFreq: 'weekly',
    priority: '1.0',
    lastMod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/about',
    changeFreq: 'monthly',
    priority: '0.8',
    lastMod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services',
    changeFreq: 'monthly',
    priority: '0.9',
    lastMod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/buyers',
    changeFreq: 'monthly',
    priority: '0.7',
    lastMod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/vendors',
    changeFreq: 'weekly',
    priority: '0.8',
    lastMod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/contact',
    changeFreq: 'monthly',
    priority: '0.7',
    lastMod: new Date().toISOString().split('T')[0]
  }
];

// Generate main sitemap.xml
function generateMainSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${STATIC_PAGES.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl delay
Crawl-delay: 1

# Disallow admin areas (if any in future)
# Disallow: /admin/
# Disallow: /private/
# Disallow: /temp/
# Disallow: /api/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /vendors
Allow: /buyers
Allow: /contact`;

  return robots;
}

// Main function to generate all SEO files
function generateSEOFiles() {
  try {
    // Ensure public directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Generate and write sitemap.xml
    const sitemapContent = generateMainSitemap();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemapContent);
    console.log('✅ Generated sitemap.xml');

    // Generate and write robots.txt
    const robotsContent = generateRobotsTxt();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'robots.txt'), robotsContent);
    console.log('✅ Generated robots.txt');

    console.log('🎉 All SEO files generated successfully!');
    console.log(`📍 Files created in: ${OUTPUT_DIR}/`);
    
  } catch (error) {
    console.error('❌ Error generating SEO files:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSEOFiles();
}

export { generateSEOFiles, generateMainSitemap, generateRobotsTxt };