// src/components/Financing/FinancingHero/FinancingHero.jsx
import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Shield, 
  DollarSign, 
  Globe, 
  TrendingUp,
  ArrowRight 
} from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './FinancingHero.module.css';

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

  const highlights = [
    { 
      icon: <CreditCard size={20} />, 
      text: 'Financing Solutions', 
      value: 'Letters of Credit & More' 
    },
    { 
      icon: <Shield size={20} />, 
      text: 'Risk Protection', 
      value: 'ECA Backed' 
    },
    { 
      icon: <DollarSign size={20} />, 
      text: 'Trade Volume', 
      value: '$50M+ Financed' 
    },
    { 
      icon: <Globe size={20} />, 
      text: 'Global Coverage', 
      value: '50+ Countries' 
    }
  ];

  return (
    <section 
      className={styles.financingHero}
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
              <CreditCard size={16} />
              <span>Trade Financing</span>
            </div>

            {/* Main Headlines */}
            <h1 className={`${styles.mainTitle} ${isVisible ? styles.fadeInUp : ''}`}>
              <span className={styles.gradientText}>Import & Export Financing</span>
            </h1>
            
            <h2 className={`${styles.subtitle} ${isVisible ? styles.fadeInUp : ''}`}>
              Secure Your Global Trade with Flexible Financing Solutions
            </h2>

            {/* Intro Paragraph */}
            <p className={`${styles.introText} ${isVisible ? styles.fadeInUp : ''}`}>
              We provide comprehensive financing solutions for vendors and buyers on our platform. 
              From Letters of Credit to structured finance, our services ensure smooth transactions, 
              stable cash flow, and reduced risk in cross-border trade operations worldwide.
            </p>

            {/* CTA Buttons */}
            <div className={`${styles.ctaSection} ${isVisible ? styles.fadeInUp : ''}`}>
              <button className={styles.primaryCta}>
                <span>Get Financing Quote</span>
                <ArrowRight size={20} />
                <div className={styles.buttonRipple}></div>
              </button>
              
              <button className={styles.secondaryCta}>
                <TrendingUp size={18} />
                <span>Learn More</span>
              </button>
            </div>

            {/* Financing Highlights */}
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
            {/* Floating Finance Icons */}
            <div className={styles.floatingElements}>
              <div className={styles.financeIcon} style={{ '--delay': '0s' }}>
                <CreditCard size={32} />
                <span>Letters of Credit</span>
              </div>
              <div className={styles.financeIcon} style={{ '--delay': '0.5s' }}>
                <Shield size={28} />
                <span>Risk Protection</span>
              </div>
              <div className={styles.financeIcon} style={{ '--delay': '1s' }}>
                <DollarSign size={30} />
                <span>Trade Credit</span>
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
      </div>
    </section>
  );
};

export default FinancingHero;