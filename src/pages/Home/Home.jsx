// src/pages/Home/Home.jsx (Updated with SEO)
import React from 'react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import FormSelector from '../../components/Forms/FormSelector/FormSelector';
import Testimonials from '../../components/Testimonials/Testimonials';
// import CallToAction from '../../components/CallToAction/CallToAction';
import { PAGE_SEO_DATA, STRUCTURED_DATA } from '../../utils/constants';
import styles from './Home.module.css';

const Home = () => {
  const seoData = PAGE_SEO_DATA.home;

  // Combine organization and website structured data for home page
  const homeStructuredData = [
    STRUCTURED_DATA.organization,
    STRUCTURED_DATA.website,
    STRUCTURED_DATA.service
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
        structuredData={homeStructuredData}
      />

      <div className={styles.homePage}>
        <main>
          <Hero />
          <Services />
          <HowItWorks />
          <FormSelector />
          <Testimonials />
          {/* <CallToAction /> */}
        </main>
      </div>
    </>
  );
};

export default Home;