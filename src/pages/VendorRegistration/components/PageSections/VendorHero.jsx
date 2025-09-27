// src/pages/VendorRegistration/components/PageSections/VendorHero.jsx
import React from 'react';
import { ArrowRight, CheckCircle, Users, Globe, DollarSign } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './VendorHero.module.css';

const VendorHero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const scrollToForm = () => {
    const formElement = document.getElementById('vendor-form-section');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const trustStats = [
    {
      icon: <Users size={24} />,
      number: '500+',
      label: 'Active Buyers',
      description: 'Global network'
    },
    {
      icon: <CheckCircle size={24} />,
      number: '99%',
      label: 'Payment Security',
      description: 'Guaranteed payments'
    },
    {
      icon: <Globe size={24} />,
      number: '50+',
      label: 'Countries',
      description: 'Worldwide reach'
    },
    {
      icon: <DollarSign size={24} />,
      number: '$50M+',
      label: 'Trade Volume',
      description: 'Annual transactions'
    }
  ];

  const trustIndicators = [
    'Verified Payment Security',
    '24/7 Vendor Support',
    'Global Market Access',
    'Quality Assurance Program'
  ];

  return (
    <section 
      ref={heroRef}
      className={`${styles.vendorHero} ${isVisible ? styles.visible : ''}`}
    >
      {/* Background Elements */}
      <div className={styles.heroBackground}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.patternOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Main Hero Content */}
        <div className={styles.heroContent}>
          {/* Hero Text */}
          <div className={styles.heroText}>
            <div className={styles.heroTag}>
              <span className={styles.tagIcon}>🚀</span>
              <span>Join Our Global Vendor Network</span>
            </div>

            <h1 className={styles.heroTitle}>
              Partner With Us as a 
              <span className={styles.titleHighlight}> Verified Vendor</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Connect with global buyers who purchase in bulk. Expand your market reach, 
              secure guaranteed payments, and grow your business through our trusted 
              procurement platform serving 500+ companies worldwide.
            </p>

            {/* Trust Indicators */}
            <div className={styles.trustList}>
              {trustIndicators.map((indicator, index) => (
                <div key={index} className={styles.trustItem}>
                  <CheckCircle size={16} className={styles.checkIcon} />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={styles.heroActions}>
              <button 
                onClick={scrollToForm}
                className={styles.primaryCta}
              >
                <span>Become a Vendor</span>
                <ArrowRight size={20} />
              </button>

              <button className={styles.secondaryCta}>
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className={styles.heroStats}>
            <div className={styles.statsHeader}>
              <h3>Trusted by Industry Leaders</h3>
              <p>Join thousands of successful vendors worldwide</p>
            </div>

            <div className={styles.statsGrid}>
              {trustStats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>
                    {stat.icon}
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                    <div className={styles.statDescription}>{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className={styles.trustBadges}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>🔒</span>
                <span>SSL Secured</span>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>✓</span>
                <span>ISO Certified</span>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>⭐</span>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollText}>Discover the Benefits</div>
          <div className={styles.scrollArrow}>
            <ArrowRight size={16} className={styles.rotatedArrow} />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
        <div className={styles.floatingElement3}></div>
      </div>
    </section>
  );
};

export default VendorHero;