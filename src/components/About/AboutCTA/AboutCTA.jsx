// src/components/About/AboutCTA/AboutCTA.jsx
import React from 'react';
import { 
  ArrowRight, 
  Users, 
  Globe, 
  MessageCircle, 
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './AboutCTA.module.css';

const AboutCTA = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const callToActions = [
    {
      id: 'vendors',
      title: 'For Vendors & Suppliers',
      description: 'Connect with global buyers and expand your market reach',
      icon: <Users size={24} />,
      color: '#3B82F6',
      action: 'Submit Your Products',
      benefits: ['Access global markets', 'Verified buyer network', 'Secure transactions']
    },
    {
      id: 'buyers',
      title: 'For Buyers & Importers',
      description: 'Source quality products from verified suppliers worldwide',
      icon: <Globe size={24} />,
      color: '#10B981',
      action: 'Start Sourcing',
      benefits: ['Verified suppliers', 'Quality assurance', 'End-to-end logistics']
    },
    {
      id: 'consultation',
      title: 'Need Expert Guidance?',
      description: 'Schedule a free consultation with our procurement specialists',
      icon: <MessageCircle size={24} />,
      color: '#F59E0B',
      action: 'Book Consultation',
      benefits: ['Free consultation', 'Expert guidance', 'Custom solutions']
    }
  ];

  const trustElements = [
    { icon: <CheckCircle size={20} />, text: 'ISO Certified Platform' },
    { icon: <Star size={20} />, text: '4.9/5 Client Rating' },
    { icon: <Zap size={20} />, text: '48hr Response Time' }
  ];

  return (
    <section 
      className={styles.aboutCTA}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.headerBadge}>
            <ArrowRight size={16} />
            <span>Take Action</span>
          </div>
          <h2 className={styles.sectionTitle}>Ready to Source or Sell in Bulk?</h2>
          <p className={styles.sectionSubtitle}>
            Partner with us today and join thousands of satisfied clients who trust 
            Globe Sourcing for their international procurement needs
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className={styles.ctaCardsGrid}>
          {callToActions.map((cta, index) => (
            <div 
              key={cta.id}
              className={`${styles.ctaCard} ${isVisible ? styles.visible : ''}`}
              style={{ 
                animationDelay: `${index * 0.2 + 0.3}s`,
                '--accent-color': cta.color
              }}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  {cta.icon}
                </div>
                <div className={styles.cardTitleSection}>
                  <h3 className={styles.cardTitle}>{cta.title}</h3>
                  <p className={styles.cardDescription}>{cta.description}</p>
                </div>
              </div>

              {/* Benefits List */}
              <div className={styles.benefitsList}>
                {cta.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className={styles.benefitItem}>
                    <CheckCircle size={16} className={styles.benefitIcon} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className={styles.cardAction}>
                <button className={styles.actionButton}>
                  <span>{cta.action}</span>
                  <ArrowRight size={18} className={styles.actionArrow} />
                  <div className={styles.buttonRipple}></div>
                </button>
              </div>

              {/* Card Background Effects */}
              <div className={styles.cardEffects}>
                <div className={styles.backgroundGradient}></div>
                <div className={styles.hoverGlow}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Elements */}
        <div className={`${styles.trustSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.trustContent}>
            <h3 className={styles.trustTitle}>Trusted by Industry Leaders</h3>
            <div className={styles.trustElements}>
              {trustElements.map((element, index) => (
                <div 
                  key={index} 
                  className={styles.trustElement}
                  style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
                >
                  <div className={styles.trustIcon}>
                    {element.icon}
                  </div>
                  <span className={styles.trustText}>{element.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.trustStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2,500+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Countries Served</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>$50M+</span>
              <span className={styles.statLabel}>Transactions Processed</span>
            </div>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className={`${styles.finalCTA} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.finalCTAContent}>
            <div className={styles.ctaBanner}>
              <div className={styles.bannerContent}>
                <h3 className={styles.bannerTitle}>
                  Start Your Global Sourcing Journey Today
                </h3>
                <p className={styles.bannerSubtitle}>
                  Join the thousands of businesses who rely on Globe Sourcing for their procurement success
                </p>
              </div>
              <div className={styles.bannerActions}>
                <button className={styles.primaryCTA}>
                  <span>Get Started Now</span>
                  <ArrowRight size={20} />
                  <div className={styles.primaryRipple}></div>
                </button>
                <button className={styles.secondaryCTA}>
                  <MessageCircle size={18} />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.decoration1}></div>
        <div className={styles.decoration2}></div>
        <div className={styles.decoration3}></div>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;