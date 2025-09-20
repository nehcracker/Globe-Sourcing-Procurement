// src/components/About/MissionVision/MissionVision.jsx
import React from 'react';
import { Target, Eye, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './MissionVision.module.css';

const MissionVision = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section 
      className={styles.missionVision}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.headerBadge}>
            <Target size={16} />
            <span>Our Purpose</span>
          </div>
          <h2 className={styles.sectionTitle}>Mission & Vision</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Mission Card */}
          <div className={`${styles.missionCard} ${isVisible ? styles.slideInLeft : ''}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <Target size={32} />
              </div>
              <div className={styles.cardTitle}>
                <h3>Our Mission</h3>
                <div className={styles.cardSubtitle}>What drives us forward</div>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <p className={styles.missionText}>
                To provide <strong>secure and seamless sourcing</strong> of bulk products 
                worldwide while protecting the interests of both buyers and vendors. We 
                bridge the gap between global markets through trusted partnerships, 
                transparent processes, and reliable logistics.
              </p>
              
              <div className={styles.missionPoints}>
                <div className={styles.missionPoint}>
                  <ArrowRight size={16} />
                  <span>Secure global trade facilitation</span>
                </div>
                <div className={styles.missionPoint}>
                  <ArrowRight size={16} />
                  <span>Protecting buyer and vendor interests</span>
                </div>
                <div className={styles.missionPoint}>
                  <ArrowRight size={16} />
                  <span>Transparent procurement processes</span>
                </div>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.missionStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>2,500+</span>
                  <span className={styles.statLabel}>Partners Protected</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>$50M+</span>
                  <span className={styles.statLabel}>Secure Transactions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`${styles.visionCard} ${isVisible ? styles.slideInRight : ''}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <Eye size={32} />
              </div>
              <div className={styles.cardTitle}>
                <h3>Our Vision</h3>
                <div className={styles.cardSubtitle}>Where we're heading</div>
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <p className={styles.visionText}>
                To become the <strong>most trusted platform</strong> for global procurement, 
                connecting manufacturers, suppliers, and buyers under one transparent 
                ecosystem that revolutionizes international trade and makes bulk sourcing 
                accessible to businesses worldwide.
              </p>
              
              <div className={styles.visionPoints}>
                <div className={styles.visionPoint}>
                  <ArrowRight size={16} />
                  <span>Leading global procurement platform</span>
                </div>
                <div className={styles.visionPoint}>
                  <ArrowRight size={16} />
                  <span>Revolutionary transparent ecosystem</span>
                </div>
                <div className={styles.visionPoint}>
                  <ArrowRight size={16} />
                  <span>Universal access to bulk sourcing</span>
                </div>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.visionStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Global Markets</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Support Ecosystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`${styles.inspirationQuote} ${isVisible ? styles.visible : ''}`}>
          <blockquote className={styles.quote}>
            "Building bridges across continents, one trusted partnership at a time."
          </blockquote>
          <div className={styles.quoteAuthor}>
            <span className={styles.authorName}>Globe Sourcing Team</span>
            <span className={styles.authorTitle}>Connecting Global Markets Since 2020</span>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundShape1}></div>
        <div className={styles.backgroundShape2}></div>
        <div className={styles.backgroundShape3}></div>
      </div>
    </section>
  );
};

export default MissionVision;