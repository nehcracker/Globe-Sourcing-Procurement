// src/pages/VendorRegistration/VendorRegistrationPage.jsx - Complete Integration
import React, { useEffect } from 'react';
import styles from './VendorRegistrationPage.module.css';

// Page Section Components (Phase 2 - All Parts)
import VendorHero from './components/PageSections/VendorHero';
// import WhyBecomeVendor from './components/PageSections/WhyBecomeVendor';
import VendorServices from './components/PageSections/VendorServices';
//import HowToJoinProcess from './components/PageSections/HowToJoinProcess';
import VendorBenefits from './components/PageSections/VendorBenefits';
import IndustriesSection from './components/PageSections/IndustriesSection';
import VendorFormSection from './components/PageSections/VendorFormSection';

// Analytics
import { useFormAnalytics } from './hooks/useFormAnalytics';

const VendorRegistrationPage = () => {
  // Analytics initialization
  const { trackPageView } = useFormAnalytics();

  useEffect(() => {
    // Track page view
    trackPageView('vendor_registration_page');

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle hash-based scrolling for external navigation
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to hero section for fresh page load
      setTimeout(() => {
        const heroSection = document.getElementById('vendor-hero-section');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    }

    // Set document title and meta tags
    document.title = 'Become a Verified Vendor | Global Product Sourcing Platform';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join our global network of verified vendors. Access international buyers, secure payments, and grow your business through bulk procurement opportunities.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Join our global network of verified vendors. Access international buyers, secure payments, and grow your business through bulk procurement opportunities.';
      document.head.appendChild(newMeta);
    }

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'vendor registration, supplier network, global sourcing, bulk orders, international trade, verified supplier, B2B marketplace, wholesale platform');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = 'vendor registration, supplier network, global sourcing, bulk orders, international trade, verified supplier, B2B marketplace, wholesale platform';
      document.head.appendChild(newMeta);
    }

    // Update Open Graph meta tags
    const updateOrCreateMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateMeta('og:title', 'Become a Verified Vendor | Globe Sourcing Procurement');
    updateOrCreateMeta('og:description', 'Partner with us as a verified vendor and connect with global buyers for bulk product sourcing.');
    updateOrCreateMeta('og:type', 'website');
    updateOrCreateMeta('og:url', window.location.href);
    updateOrCreateMeta('og:image', '/images/vendor-registration-og.jpg');

    // Update Twitter Card meta tags
    const updateOrCreateTwitterMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateTwitterMeta('twitter:card', 'summary_large_image');
    updateOrCreateTwitterMeta('twitter:title', 'Become a Verified Vendor | Globe Sourcing Procurement');
    updateOrCreateTwitterMeta('twitter:description', 'Partner with us as a verified vendor and connect with global buyers for bulk product sourcing.');
    updateOrCreateTwitterMeta('twitter:image', '/images/vendor-registration-twitter.jpg');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.origin + '/vendor-registration');
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', window.location.origin + '/vendor-registration');
      document.head.appendChild(canonical);
    }

    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Vendor Registration",
      "description": "Join our global network of verified vendors and connect with international buyers",
      "url": window.location.href,
      "mainEntity": {
        "@type": "Service",
        "name": "Vendor Registration Service",
        "description": "Platform for suppliers to register and connect with global buyers",
        "provider": {
          "@type": "Organization",
          "name": "Globe Sourcing Procurement"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free vendor registration"
        }
      }
    };

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [trackPageView]);

  return (
    <div className={styles.vendorRegistrationPage}>
      {/* Navigation Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumbList}>
              <li>
                <a href="/" aria-label="Home page">Home</a>
              </li>
              <li>
                <span aria-current="page">Vendor Registration</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Phase 2: Complete Page Layout Components */}
      
      {/* Part 1: Hero Section - Creates immediate visual impact */}
      <VendorHero />
      
      {/* Part 2: Benefits Section - Builds on hero with value props 
      <WhyBecomeVendor />
      */}

      {/* Part 3: Services Section - Detailed vendor offerings */}
      <VendorServices />
      
      {/* Part 4: Process Timeline - Clear joining steps 
      <HowToJoinProcess />
      */}
      
      {/* Part 5A: Success & Metrics - Credibility building */}
      <VendorBenefits />
      
      {/* Part 5B: Industries Coverage - Market scope */}
      <IndustriesSection />
      
      {/* Part 6: Form Integration - Final assembly with embedded form */}
      <VendorFormSection />

      {/* Skip to main content link for accessibility
        href="#vendor-form-section" 
        className={styles.skipLink}
        aria-label="Skip to vendor registration form"
      >
        Skip to Registration Form
      </a> 
      <a 
      */}
    </div>
  );
};

export default VendorRegistrationPage;