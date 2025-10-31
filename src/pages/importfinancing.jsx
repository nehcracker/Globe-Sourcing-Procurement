// src/components/Financing/FinancingPage.jsx
import React from 'react';
import SEO from '../components/SEO/SEO';
import FinancingHero2 from '../components/Financing/FinancingHero/FinancingHero2';
import FinancingOverview from '../components/Financing/FinancingOverview/FinancingOverview';
import FinancingProcess from '../components/Financing/FinancingProcess/FinancingProcess';
import WhatWeFinance from '../components/Financing/WhatWeFinance/WhatWeFinance';
import BenefitsSection from '../components/Financing/BenefitsSection/BenefitsSection';
import ECAsPartners from '../components/Financing/ECAsPartners/ECAsPartners';
import IndustriesSupported from '../components/Financing/IndustriesSupported/IndustriesSupported';
import FinancingForm from '../components/Financing/FinancingForm/FinancingForm';
// import FinancingCTA from './FinancingCTA/FinancingCTA';
// import FinancingFAQ from './FinancingFAQ/FinancingFAQ';
import styles from './FinancingPage.module.css';

const FinancingPage = () => {
  // SEO Configuration for Financing Page
  const seoData = {
    title: 'Import & Export Financing | Trade Finance Solutions',
    description: 'Comprehensive trade financing solutions including Letters of Credit, Bank Guarantees, and structured finance for international procurement and sourcing.',
    keywords: 'import financing, export financing, letters of credit, trade finance, bank guarantees, ECA support, international trade financing, supply chain finance',
    image: '/images/og-financing-globe-sourcing.jpg',
    url: '/import-financing',
    type: 'website',
  };

  // Structured data for financing page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Import & Export Financing",
    "provider": {
      "@type": "Organization",
      "name": "Globe Sourcing Procurement"
    },
    "description": "Comprehensive trade financing solutions for international procurement",
    "serviceType": "Trade Finance",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "price": "Contact for quote"
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        image={seoData.image}
        url={seoData.url}
        type={seoData.type}
        structuredData={structuredData}
      />

      {/* Main Content */}
      <main className={styles.financingPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <FinancingHero2 />
        </section>

        {/* Overview Section */}
        <section className={styles.overviewSection}>
          <FinancingOverview />
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <FinancingProcess />
        </section>

        {/* What We Finance Section */} 
        <section className={styles.whatWeFinanceSection}>
          <WhatWeFinance />
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <BenefitsSection />
        </section>

        {/* ECA Partners Section */} 
        <section className={styles.ecaPartnersSection}>
          <ECAsPartners />
        </section>

        {/* Industries Supported Section */}
        <section className={styles.industriesSection}>
          <IndustriesSupported />
        </section>

        {/* Application Form Section */}
        <section id="financing-form" className={styles.formSection}>
          <FinancingForm />
        </section>

        {/* CTA Section 
        <section className={styles.ctaSection}>
          <FinancingCTA />
        </section>

        {/* FAQ Section 
        <section className={styles.faqSection}>
          <FinancingFAQ />
        </section>
        */}
      </main>
    </>
  );
};

export default FinancingPage;