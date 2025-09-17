// src/pages/Home/Home.jsx
import React from 'react';
import Navbar from '../../components/Layout/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import styles from './Home.module.css';
import Services from '../../components/Services/Services';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import FormSelector from '../../components/Forms/FormSelector/FormSelector';
/*

import Testimonials from '../../components/Testimonials/Testimonials';
import CallToAction from '../../components/CallToAction/CallToAction';
*/


const Home = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <main>
        <Hero />
        <Services />
         <HowItWorks />
        <FormSelector />
       {/*  <Testimonials />
        <CallToAction />*/}
      </main>
     
    </div>
  );
};

export default Home;