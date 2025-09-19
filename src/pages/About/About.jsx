// src/pages/About/About.jsx
import React from 'react';
import Navbar from '../../components/Layout/Navbar/Navbar';
import Footer from '../../components/Layout/Footer/Footer';
import AboutHero from '../../components/About/AboutHero/AboutHero';
// Import other About sections when created
import WhoWeAre from '../../components/About/WhoWeAre/WhoWeAre';
// import MissionVision from '../../components/About/MissionVision/MissionVision';
// import CoreValues from '../../components/About/CoreValues/CoreValues';
// import WhyChooseUs from '../../components/About/WhyChooseUs/WhyChooseUs';
// import AboutCTA from '../../components/About/AboutCTA/AboutCTA';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Navbar />
      
      <main className={styles.main}>
        <AboutHero />
        
        {/* Uncomment these sections as you create them */}
         <WhoWeAre /> 
        {/* <MissionVision /> */}
        {/* <CoreValues /> */}
        {/* <WhyChooseUs /> */}
        {/* <AboutCTA /> */}
      </main>
      
      <Footer />
    </div>
  );
};

export default About;