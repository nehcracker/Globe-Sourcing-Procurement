// src/pages/About/About.jsx
import React from 'react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Layout/Navbar/Navbar';
import AboutHero from '../../components/About/AboutHero/AboutHero';
import WhoWeAre from '../../components/About/WhoWeAre/WhoWeAre';
import MissionVision from '../../components/About/MissionVision/MissionVision';
import CoreValues from '../../components/About/CoreValues/CoreValues';
import WhyChooseUs from '../../components/About/WhyChooseUs/WhyChooseUs';
import AboutCTA from '../../components/About/AboutCTA/AboutCTA';
import { PAGE_SEO_DATA, STRUCTURED_DATA } from '../../utils/constants';
import styles from './About.module.css';

const About = () => {
  const seoData = PAGE_SEO_DATA.about;

  // Combine organization and breadcrumb structured data for about page
  const aboutStructuredData = [
    STRUCTURED_DATA.organization,
    STRUCTURED_DATA.breadcrumb
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
        structuredData={aboutStructuredData}
      />

      <div className={styles.aboutPage}>
        <Navbar />

        <main className={styles.main}>
          <AboutHero />

          {/* Uncomment these sections as you create them */}
           <WhoWeAre />
            <MissionVision />
            <CoreValues /> 
            <WhyChooseUs />
            <AboutCTA />
        </main>
      </div>
    </>
  );
};

export default About;