// src/components/About/AboutHero/AboutHero.jsx
import React, { useState, useEffect } from 'react';
import { Globe, Users, TrendingUp, Shield } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './AboutHero.module.css';

const AboutHero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const highlights = [
    { icon: <Globe size={20} />, text: 'Global Network', value: '50+ Countries' },
    { icon: <Users size={20} />, text: 'Trusted Clients', value: '2,500+ Companies' },
    { icon: <TrendingUp size={20} />, text: 'Trade Volume', value: '$50M+ Processed' },
    { icon: <Shield size={20} />, text: 'Success Rate', value: '99% Delivery' }
  ];

  return (
    <section 
      className={styles.aboutHero}
      ref={heroRef}
    >
      {/* Background Image with Overlay */}
      <div className={styles.backgroundImage}>
        <div className={styles.imageOverlay}></div>
        {/* Using a placeholder for global trade/logistics image */}
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Global trade and logistics"
          className={styles.bgImage}
        />
      </div>

      {/* Content Container */}
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Main Content */}
          <div className={`${styles.mainContent} ${isLoaded ? styles.loaded : ''}`}>
            {/* Company Badge */}
            <div className={`${styles.companyBadge} ${isVisible ? styles.fadeInUp : ''}`}>
              <Globe size={16} />
              <span>Est. 2020 • Global Procurement Leader</span>
            </div>

            {/* Main Headline */}
            <h1 className={`${styles.headline} ${isVisible ? styles.fadeInUp : ''}`}>
              About{' '}
              <span className={styles.brandName}>Globe Sourcing</span>
              <br />
              <span className={styles.brandSuffix}>Procurement</span>
            </h1>

            {/* Subtext */}
            <p className={`${styles.subtext} ${isVisible ? styles.fadeInUp : ''}`}>
              Procurement & Sourcing Solutions Limited is a global platform connecting 
              buyers and vendors for bulk product sourcing, purchasing, and delivery. 
              We bridge continents through trusted partnerships and seamless logistics.
            </p>

            {/* Key Highlights */}
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

            {/* Action Buttons */}
            <div className={`${styles.actionButtons} ${isVisible ? styles.fadeInUp : ''}`}>
              <button 
                className={styles.primaryAction}
                onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Partner With Us</span>
                <div className={styles.buttonRipple}></div>
              </button>
              
              <button 
                className={styles.secondaryAction}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className={`${styles.visualElements} ${isVisible ? styles.slideInRight : ''}`}>
            {/* Floating Stats Cards */}
            <div className={styles.floatingStats}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>4.9★</div>
                <div className={styles.statLabel}>Client Rating</div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support</div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Verified</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className={styles.decorativeElements}>
              <div className={styles.floatingShape1}></div>
              <div className={styles.floatingShape2}></div>
              <div className={styles.floatingShape3}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`${styles.scrollIndicator} ${isLoaded ? styles.bounce : ''}`}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>Discover Our Story</span>
        </div>
      </div>

      {/* Animated Background Patterns */}
      <div className={styles.backgroundPatterns}>
        <div className={styles.pattern1}></div>
        <div className={styles.pattern2}></div>
        <div className={styles.pattern3}></div>
      </div>
    </section>
  );
};

export default AboutHero;