// src/pages/VendorRegistration/VendorRegistrationPage.jsx
import React, { useEffect } from 'react';
import styles from './VendorRegistrationPage.module.css';

// Page Section Components (Phase 2)
// import VendorHero from './components/PageSections/VendorHero';
// import WhyBecomeVendor from './components/PageSections/WhyBecomeVendor';
// import VendorServices from './components/PageSections/VendorServices';
// import HowToJoinProcess from './components/PageSections/HowToJoinProcess';
// import VendorBenefits from './components/PageSections/VendorBenefits';
// import IndustriesSection from './components/PageSections/IndustriesSection';
// import VendorFormSection from './components/PageSections/VendorFormSection';

// Multi-Step Form Component
import MultiStepForm from './components/MultiStepForm/MultiStepForm';

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
      metaKeywords.setAttribute('content', 'vendor registration, supplier network, global sourcing, bulk orders, international trade, verified supplier');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = 'vendor registration, supplier network, global sourcing, bulk orders, international trade, verified supplier';
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
    updateOrCreateMeta('og:url', '/vendor-registration');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', '/vendor-registration');
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', '/vendor-registration');
      document.head.appendChild(canonical);
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <span>Vendor Registration</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Phase 2: Page Layout Components will be added here */}
        {/* 
        <VendorHero />
        <WhyBecomeVendor />
        <VendorServices />
        <HowToJoinProcess />
        <VendorBenefits />
        <IndustriesSection />
        <VendorFormSection />
        */}

        {/* Phase 1: Multi-Step Form (Temporary placement for testing) */}
        <section className={styles.formSection}>
          <div className={styles.container}>
            <div className={styles.formHeader}>
              <h1 className={styles.formTitle}>Vendor Registration</h1>
              <p className={styles.formSubtitle}>
                Join our global network of verified suppliers and connect with buyers worldwide
              </p>
            </div>
            <MultiStepForm />
          </div>
        </section>
    </div>
  );
};

export default VendorRegistrationPage;