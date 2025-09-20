// src/components/SEO/SitemapGenerator.jsx
import { useEffect } from 'react';

const SitemapGenerator = () => {
  useEffect(() => {
    // Function to generate sitemap dynamically if needed
    const generateDynamicSitemap = () => {
      const pages = [
        {
          url: '/',
          priority: 1.0,
          changefreq: 'weekly',
          title: 'Bulk Order Procurement |Supply Chain Management | Global Procurement Solutions'
        },
        {
          url: '/about',
          priority: 0.8,
          changefreq: 'monthly',
          title: 'About Us - Globe Sourcing Procurement'
        },
        {
          url: '/services',
          priority: 0.9,
          changefreq: 'monthly',
          title: 'Our Services - Procurement & Sourcing'
        },
        {
          url: '/vendors',
          priority: 0.8,
          changefreq: 'weekly',
          title: 'Vendor Registration - Submit Your Products'
        },
        {
          url: '/buyers',
          priority: 0.8,
          changefreq: 'weekly',
          title: 'Buyer Requests - Find Global Suppliers'
        },
        {
          url: '/contact',
          priority: 0.6,
          changefreq: 'monthly',
          title: 'Contact Us - Get in Touch with Globe Sourcing Procurement'
        }
      ];

      // You can extend this to dynamically add pages
      // For example, if you add blog posts or product pages later
      return pages;
    };

    // Store sitemap data for potential dynamic generation
    window.sitemapData = generateDynamicSitemap();
    
  }, []);

  return null; // This component doesn't render anything
};

export default SitemapGenerator;