// src/components/Hero/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Package, Truck, CheckCircle } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { COMPANY } from '../../utils/constants';
import { scrollToElement } from '../../utils/helpers';
import styles from './Hero.module.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { ref: heroRef } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleCtaClick = (targetId) => {
    // For buyer form, scroll to the FormSelector section first
    if (targetId === 'buyer-form') {
      scrollToElement('get-started', 80);
      // Open buyer modal after a short delay to allow scroll to complete
      setTimeout(() => {
        const buyerCard = document.getElementById('buyer-form');
        if (buyerCard) {
          buyerCard.click();
        }
      }, 800);
    } else if (targetId === 'vendor-form') {
      scrollToElement('get-started', 80);
      // Open vendor modal after a short delay to allow scroll to complete
      setTimeout(() => {
        const vendorCard = document.getElementById('vendor-form');
        if (vendorCard) {
          vendorCard.click();
        }
      }, 800);
    } else {
      scrollToElement(targetId);
    }
  };

  const stats = [
    { number: '500+', label: 'Verified Suppliers', icon: <CheckCircle size={isMobile ? 18 : 20} /> },
    { number: '50+', label: 'Countries', icon: <Globe size={isMobile ? 18 : 20} /> },
    { number: '1000+', label: 'Products Sourced', icon: <Package size={isMobile ? 18 : 20} /> },
    { number: '99%', label: 'On-Time Delivery', icon: <Truck size={isMobile ? 18 : 20} /> }
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className={`${styles.hero} ${isLoaded ? styles.loaded : ''}`}
    >
      {/* Background Pattern */}
      <div className={styles.backgroundPattern}></div>

      {/* Hero Content */}
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Badge */}
            <div className={`${styles.badge} ${isLoaded ? styles.fadeInUp : ''}`}>
              <Globe size={14} />
              <span>Trusted Global Procurement Partner</span>
            </div>

            {/* Headline */}
            <h1 className={`${styles.headline} ${isLoaded ? styles.fadeInUp : ''}`}>
              <span className={styles.gradientText}>Global Source Procurement</span>
              <br />
              <span className={styles.regularText}>& Bulk Sourcing Solutions</span>
            </h1>

            <h2 className={`${styles.headline} ${isLoaded ? styles.fadeInUp : ''}`}>
              <span className={styles.gradientText2}>Source, Procure, & Deliver Products Worldwide</span>
            </h2>

            {/* Subtitle */}
            <p className={`${styles.subtitle} ${isLoaded ? styles.fadeInUp : ''}`}>
              {COMPANY.description} We connect buyers with trusted vendors for
              seamless international trade and end-to-end logistics support.
            </p>

            {/* CTA Buttons */}
            <div className={`${styles.ctaButtons} ${isLoaded ? styles.fadeInUp : ''}`}>
              <button
                className={`${styles.primaryCta} ${styles.pulseAnimation}`}
                onClick={() => handleCtaClick('buyer-form')}
                aria-label="Request a procurement quote"
              >
                <span>Request a Quote</span>
                <ArrowRight size={18} />
                <div className={styles.buttonRipple}></div>
              </button>

              <button
                className={styles.secondaryCta}
                onClick={() => handleCtaClick('vendor-form')}
                aria-label="Join as a vendor partner"
              >
                <span>Join as Vendor</span>
                <ArrowRight size={16} className={styles.secondaryArrow} />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`${styles.trustIndicators} ${isLoaded ? styles.fadeInUp : ''}`}>
              <span className={styles.trustText}>Trusted by businesses across Africa</span>
              <div className={styles.trustLogos}>
                <div className={styles.trustLogo}>
                  <span>Kenya</span>
                </div>
                <div className={styles.trustLogo}>
                  <span>Uganda</span>
                </div>
                <div className={styles.trustLogo}>
                  <span>Tanzania</span>
                </div>
                <div className={styles.trustLogo}>
                  <span>DRC Congo</span>
                </div>
                <div className={styles.trustLogo}>
                  <span>Zambia</span>
                </div>
                <div className={styles.trustLogo}>
                  <span>Zimbambwe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual/Stats */}
          <div className={styles.heroVisual}>
            <div className={`${styles.statsGrid} ${isLoaded ? styles.slideInRight : ''}`}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={styles.statCard}
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className={styles.statIcon}>
                    {stat.icon}
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements - Hidden on mobile for performance */}
            {!isMobile && (
              <div className={styles.floatingElements}>
                <div className={`${styles.floatingElement} ${styles.float1}`}>
                  <Globe size={24} />
                </div>
                <div className={`${styles.floatingElement} ${styles.float2}`}>
                  <Package size={20} />
                </div>
                <div className={`${styles.floatingElement} ${styles.float3}`}>
                  <Truck size={22} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`${styles.scrollIndicator} ${isLoaded ? styles.bounce : ''}`}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
