// src/components/Services/ServicesHero/ServicesHero.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Globe, Package, Users } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './ServicesHero.module.css';

const ServicesHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: heroRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    { icon: <Globe size={20} />, text: 'Global Network', value: '50+ Countries' },
    { icon: <Users size={20} />, text: 'Expert Team', value: '24/7 Support' },
    { icon: <Package size={20} />, text: 'Products Sourced', value: '10,000+' },
    { icon: <CheckCircle size={20} />, text: 'Success Rate', value: '99%' }
  ];

  return (
    <section 
      className={styles.servicesHero}
      ref={heroRef}
    >
      {/* Background Elements */}
      <div className={styles.backgroundPattern}>
        <div className={styles.patternOverlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Main Content */}
          <div className={`${styles.mainContent} ${isLoaded ? styles.loaded : ''}`}>
            {/* Badge */}
            <div className={`${styles.badge} ${isVisible ? styles.fadeInUp : ''}`}>
              <Package size={16} />
              <span>Complete Solutions</span>
            </div>

            {/* Main Headlines */}
            <h2 className={`${styles.mainTitle} ${isVisible ? styles.fadeInUp : ''}`}>
              Our Services
            </h2>
            
            <h1 className={`${styles.subtitle} ${isVisible ? styles.fadeInUp : ''}`}>
              <span className={styles.gradientText}>Comprehensive Procurement & Sourcing Solutions</span>
            </h1>

            {/* Intro Paragraph */}
            <p className={`${styles.introText} ${isVisible ? styles.fadeInUp : ''}`}>
              We deliver end-to-end procurement and sourcing solutions that streamline your 
              global supply chain operations. From strategic sourcing to logistics management, 
              our comprehensive services ensure efficient, cost-effective, and reliable 
              procurement processes for businesses worldwide.
            </p>

            {/* CTA Button */}
            <div className={`${styles.ctaSection} ${isVisible ? styles.fadeInUp : ''}`}>
              <button className={styles.primaryCta}>
                <span>Explore Our Services</span>
                <ArrowRight size={20} />
                <div className={styles.buttonRipple}></div>
              </button>
            </div>

            {/* Service Highlights */}
            <div className={`${styles.highlights} ${isVisible ? styles.fadeInUp : ''}`}>
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className={styles.highlightItem}
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                >
                  <div className={styles.highlightIcon}>
                    {highlight.icon}
                  </div>
                  <div className={styles.highlightContent}>
                    <span className={styles.highlightValue}>{highlight.value}</span>
                    <span className={styles.highlightText}>{highlight.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Elements */}
          <div className={`${styles.visualSection} ${isVisible ? styles.slideInRight : ''}`}>
            {/* Floating Service Icons */}
            <div className={styles.floatingServices}>
              <div className={styles.serviceIcon} style={{ '--delay': '0s' }}>
                <Globe size={32} />
                <span>Global Sourcing</span>
              </div>
              <div className={styles.serviceIcon} style={{ '--delay': '0.5s' }}>
                <Package size={28} />
                <span>Logistics</span>
              </div>
              <div className={styles.serviceIcon} style={{ '--delay': '1s' }}>
                <Users size={30} />
                <span>Consulting</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className={styles.decorativeElements}>
              <div className={styles.circle1}></div>
              <div className={styles.circle2}></div>
              <div className={styles.circle3}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`${styles.scrollIndicator} ${isLoaded ? styles.bounce : ''}`}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>Discover Our Services</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;