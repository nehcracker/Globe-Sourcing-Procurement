// src/pages/Financing/Financing.jsx
import React from 'react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Layout/Navbar/Navbar';
import FinancingHero from '../../components/Financing/FinancingHero/FinancingHero';
import FinancingSolutions from '../../components/Financing/FinancingSolutions/FinancingSolutions';
import ProcessSteps from '../../components/Financing/ProcessSteps/ProcessSteps';
import ECASupport from '../../components/Financing/ECASupport/ECASupport';
import FinancingCTA from '../../components/Financing/FinancingCTA/FinancingCTA';
import { PAGE_SEO_DATA, STRUCTURED_DATA } from '../../utils/constants';
import styles from './Financing.module.css';

const Financing = () => {
  const seoData = PAGE_SEO_DATA.financing;

  // Combined structured data for financing page
  const financingStructuredData = [
    STRUCTURED_DATA.organization,
    STRUCTURED_DATA.financingService,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://globesourceprocurement.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Import & Export Financing",
          "item": "https://globesourceprocurement.com/financing"
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        image={seoData.image}
        type="website"
        structuredData={financingStructuredData}
      />

      <div className={styles.financingPage}>
        <Navbar />

        <main className={styles.main}>
          <FinancingHero />
          <FinancingSolutions />
          <ProcessSteps />
          <ECASupport />
          <FinancingCTA />
        </main>
      </div>
    </>
  );
};

export default Financing;