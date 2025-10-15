import React, { useEffect } from 'react';
import VendorFormSection from '../VendorRegistration/components/PageSections/VendorFormSection';
import { useFormAnalytics } from '../VendorRegistration/hooks/useFormAnalytics';
import styles from './VendorFormPage.module.css';

const VendorFormPage = () => {
  // Analytics initialization
  const { trackPageView } = useFormAnalytics();

  useEffect(() => {
    // Track page view
    trackPageView('vendor_form_page');

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Set document title and meta tags
    document.title = 'Vendor Registration Form | Global Product Sourcing Platform';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete your vendor registration to join our global network of verified suppliers. Access international buyers and grow your business.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Complete your vendor registration to join our global network of verified suppliers. Access international buyers and grow your business.';
      document.head.appendChild(newMeta);
    }

    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'vendor registration form, supplier application, global sourcing, bulk orders, international trade, verified supplier');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = 'vendor registration form, supplier application, global sourcing, bulk orders, international trade, verified supplier';
      document.head.appendChild(newMeta);
    }

    // Structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Vendor Registration Form",
      "description": "Complete your vendor registration to join our global network of verified suppliers",
      "url": window.location.href,
      "publisher": {
        "@type": "Organization",
        "name": "Globe Supply Solutions",
        "url": window.location.origin
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free vendor registration form"
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
    <div className={styles.vendorFormPage}>
      {/* Navigation Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumbList}>
              <li>
                <a href="/" aria-label="Home page">Home</a>
              </li>
              <li>
                <a href="/vendor-registration-page" aria-label="Vendor Registration page">Vendor Registration</a>
              </li>
              <li>
                <span aria-current="page">Registration Form</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <VendorFormSection />
    </div>
  );
};

export default VendorFormPage;
