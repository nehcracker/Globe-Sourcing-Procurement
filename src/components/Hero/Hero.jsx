// src/components/Hero/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Package, Truck, CheckCircle } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { COMPANY } from '../../utils/constants';
import { scrollToElement } from '../../utils/helpers';
import styles from './Hero.module.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: heroRef } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = (targetId) => {
    scrollToElement(targetId);
  };

  const stats = [
    { number: '500+', label: 'Verified Suppliers', icon: <CheckCircle size={20} /> },
    { number: '50+', label: 'Countries', icon: <Globe size={20} /> },
    { number: '1000+', label: 'Products Sourced', icon: <Package size={20} /> },
    { number: '99%', label: 'On-Time Delivery', icon: <Truck size={20} /> }
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
              <Globe size={16} />
              <span>Trusted Global Procurement Partner</span>
            </div>

            {/* Headline */}
            <h1 className={`${styles.headline} ${isLoaded ? styles.fadeInUp : ''}`}>
              <span className={styles.gradientText}>Global Procurement</span>
              <br />
              <span>and Sourcing Services</span>
            </h1>

            {/* Subtitle */}
            <p className={`${styles.subtitle} ${isLoaded ? styles.fadeInUp : ''}`}>
              {COMPANY.description} We connect buyers with trusted vendors for 
              seamless international trade and end-to-end logistics support.
            </p>

            {/* CTA Buttons */}
            <div className={`${styles.ctaButtons} ${isLoaded ? styles.fadeInUp : ''}`}>
              <button 
                className={`${styles.primaryCta} ${styles.pulseAnimation}`}
                onClick={() => handleCtaClick('#buyer-form')}
              >
                <span>Request a Quote</span>
                <ArrowRight size={20} />
              </button>
              
              <button 
                className={styles.secondaryCta}
                onClick={() => handleCtaClick('#vendor-form')}
              >
                <span>Join as Vendor</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`${styles.trustIndicators} ${isLoaded ? styles.fadeInUp : ''}`}>
              <span className={styles.trustText}>Trusted by businesses across Africa</span>
              <div className={styles.trustLogos}>
                {/* Placeholder for company logos */}
                <div className={styles.trustLogo}>Company A</div>
                <div className={styles.trustLogo}>Company B</div>
                <div className={styles.trustLogo}>Company C</div>
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

            {/* Floating Elements */}
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