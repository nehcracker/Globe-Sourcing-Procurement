// src/components/SEO/SEO.jsx (React 19 compatible version)
import  { useEffect } from 'react';
import { COMPANY } from '../../utils/constants';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  noindex = false,
  canonicalUrl,
  structuredData
}) => {
  const siteTitle = `${title} | ${COMPANY.name}`;
  const siteUrl = process.env.REACT_APP_SITE_URL || 'https://globesourcingprocurement.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/images/og-default.jpg`;

  useEffect(() => {
    // Update document title
    document.title = siteTitle;

    // Create or update meta tags
    const updateMetaTag = (property, content, isProperty = true) => {
      if (!content) return;
      
      let selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let element = document.querySelector(selector);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    const updateLinkTag = (rel, href) => {
      if (!href) return;
      
      let element = document.querySelector(`link[rel="${rel}"]`);
      
      if (element) {
        element.setAttribute('href', href);
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('href', href);
        document.head.appendChild(link);
      }
    };

    // Basic meta tags
    updateMetaTag('description', description, false);
    updateMetaTag('keywords', keywords, false);
    updateMetaTag('author', author, false);

    // Canonical URL
    updateLinkTag('canonical', canonicalUrl || fullUrl);

    // Robots
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow', false);
    }

    // Open Graph tags
    updateMetaTag('og:type', type);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', imageUrl);
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
    updateMetaTag('og:image:alt', title);
    updateMetaTag('og:url', fullUrl);
    updateMetaTag('og:site_name', COMPANY.name);
    updateMetaTag('og:locale', 'en_US');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:site', '@globesourcepro', false);
    updateMetaTag('twitter:creator', '@globesourcepro', false);
    updateMetaTag('twitter:title', title, false);
    updateMetaTag('twitter:description', description, false);
    updateMetaTag('twitter:image', imageUrl, false);
    updateMetaTag('twitter:image:alt', title, false);

    // Article meta (for blog posts/articles)
    if (type === 'article') {
      updateMetaTag('article:published_time', publishedTime);
      updateMetaTag('article:modified_time', modifiedTime);
      updateMetaTag('article:author', author);
    }

    // Structured data
    if (structuredData) {
      // Remove existing structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Theme color
    updateMetaTag('theme-color', '#1e3a8a', false);
    updateMetaTag('msapplication-TileColor', '#1e3a8a', false);

    // Google site verification
    updateMetaTag('google-site-verification', 'kL9BMne3dPuWscjCq4_Ulx9DMGKXm7Q65rNdBQyk0zk', false);

    // Cleanup function
    return () => {
      // Optional: Remove meta tags when component unmounts
      // This is generally not necessary for SEO meta tags
    };
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, noindex, canonicalUrl, structuredData, siteTitle, fullUrl, imageUrl]);

  // Add favicon and other static assets
  useEffect(() => {
    const addLinkIfNotExists = (rel, href, sizes = null, type = null) => {
      if (document.querySelector(`link[rel="${rel}"][href="${href}"]`)) return;
      
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (sizes) link.sizes = sizes;
      if (type) link.type = type;
      document.head.appendChild(link);
    };

    // Preconnect for performance
    addLinkIfNotExists('preconnect', 'https://fonts.googleapis.com');
    addLinkIfNotExists('preconnect', 'https://fonts.gstatic.com');

    // Favicon and icons
    addLinkIfNotExists('icon', '/favicon.ico', null, 'image/x-icon');
    addLinkIfNotExists('apple-touch-icon', '/apple-touch-icon.png', '180x180');
    addLinkIfNotExists('icon', '/favicon-32x32.png', '32x32', 'image/png');
    addLinkIfNotExists('icon', '/favicon-16x16.png', '16x16', 'image/png');
    addLinkIfNotExists('manifest', '/site.webmanifest');
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default SEO;