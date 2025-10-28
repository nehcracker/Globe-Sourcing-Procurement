// src/components/Financing/FinancingHero/FinancingHero2.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Globe, Shield, Clock } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './FinancingHero2.module.css';

const FinancingHero = () => {
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

  // Key highlights for the hero
  const highlights = [
    { 
      icon: <TrendingUp size={20} />, 
      text: '100% Financing', 
      value: 'On Approved Deals' 
    },
    { 
      icon: <Clock size={20} />, 
      text: 'Fast Approval', 
      value: 'Within 48-72 Hours' 
    },
    { 
      icon: <Globe size={20} />, 
      text: 'Global Coverage', 
      value: '50+ Countries' 
    },
    { 
      icon: <Shield size={20} />, 
      text: 'Secure & Safe', 
      value: 'Verified Transactions' 
    }
  ];

  return (
    <section 
      className={styles.financingHero}
      ref={heroRef}
    >

      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Main Content */}
          <div className={`${styles.mainContent} ${isLoaded ? styles.loaded : ''}`}>
            {/* Badge */}
            <div className={`${styles.badge} ${isVisible ? styles.fadeInUp : ''}`}>
              <TrendingUp size={16} />
              <span>Trade Finance Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className={`${styles.mainHeadline} ${isVisible ? styles.fadeInUp : ''}`}>
              Import and Export Financing
            </h1>

            {/* Subheadline */}
            <h2 className={`${styles.subheadline} ${isVisible ? styles.fadeInUp : ''}`}>
              <span className={styles.gradientText}>
                Finance Your Imports and Exports with Confidence
              </span>
            </h2>

            {/* Description */}
            <p className={`${styles.description} ${isVisible ? styles.fadeInUp : ''}`}>
              Access comprehensive trade financing for import and export operations. From Letters of Credit to bank guarantees, 
              we connect you with trusted financial partners worldwide to facilitate seamless international transactions with 
              confidence and security.
            </p>

            {/* Background Elements */}
            <div className={styles.backgroundPattern}>
            <div className={styles.patternOverlay}></div>
            <div className={styles.floatingShape1}></div>
            <div className={styles.floatingShape2}></div>
            <div className={styles.floatingShape3}></div>
            </div>

            {/* CTA Buttons */}
            <div className={`${styles.ctaButtons} ${isVisible ? styles.fadeInUp : ''}`}>
              <button className={styles.primaryBtn}>
                <span>Apply for Financing</span>
                <ArrowRight size={20} />
                <div className={styles.buttonRipple}></div>
              </button>
              <button className={styles.secondaryBtn}>
                <span>Learn More About Options</span>
              </button>
            </div>

            {/* Key Stats */}
            <div className={`${styles.stats} ${isVisible ? styles.fadeInUp : ''}`}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>$50M+</span>
                <span className={styles.statLabel}>Trade Volume Financed</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>2,500+</span>
                <span className={styles.statLabel}>Successful Transactions</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99%</span>
                <span className={styles.statLabel}>Approval Rate</span>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className={`${styles.visualSection} ${isVisible ? styles.slideInRight : ''}`}>
            {/* Feature Cards */}
            <div className={styles.featureCards}>
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className={styles.featureCard}
                  style={{ animationDelay: `${index * 0.15 + 0.5}s` }}
                >
                  <div className={styles.cardIcon}>
                    {highlight.icon}
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>{highlight.text}</div>
                    <div className={styles.cardSubtitle}>{highlight.value}</div>
                  </div>
                  <div className={styles.cardArrow}>
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className={styles.decorativeShapes}>
              <div className={styles.circle1}></div>
              <div className={styles.circle2}></div>
              <div className={styles.circle3}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`${styles.scrollIndicator} ${isLoaded ? styles.show : ''}`}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>Explore Financing Options</span>
        </div>
      </div>
    </section>
  );
};

export default FinancingHero;