// src/components/Services/Services.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { SERVICES } from '../../utils/constants';
import styles from './Services.module.css';

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section 
      id="services" 
      className={styles.services}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive procurement solutions to connect buyers with trusted suppliers worldwide
          </p>
        </div>

        {/* Services Grid */}
        <div className={`${styles.servicesGrid} ${isVisible ? styles.visible : ''}`}>
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.bottomCta} ${isVisible ? styles.visible : ''}`}>
          <p className={styles.ctaText}>
            Looking for something specific? We source products across all industries and categories.
          </p>
          <div className={styles.ctaButtons}>
            <button 
              className={styles.primaryBtn}
              onClick={() => document.getElementById('buyer-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Quote
            </button>
            <button 
              className={styles.secondaryBtn}
              onClick={() => document.getElementById('vendor-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join as Vendor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;