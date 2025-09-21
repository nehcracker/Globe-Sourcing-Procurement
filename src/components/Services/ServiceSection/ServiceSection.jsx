// src/components/Services/ServiceSection/ServiceSection.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './ServiceSection.module.css';

const ServiceSection = ({ 
  title, 
  description, 
  bulletPoints, 
  icon, 
  isReversed = false, 
  accentColor = '#3B82F6',
  index = 0 
}) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section 
      className={`${styles.serviceSection} ${isReversed ? styles.reversed : ''}`}
      ref={sectionRef}
      style={{ '--accent-color': accentColor }}
    >
      <div className={styles.container}>
        <div className={styles.sectionContent}>
          {/* Content Side */}
          <div className={`${styles.contentSide} ${isVisible ? styles.slideInLeft : ''}`}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>
                {title}
              </h2>
              <p className={styles.sectionDescription}>
                {description}
              </p>
              
              {/* Bullet Points */}
              <div className={styles.bulletPointsList}>
                <h3 className={styles.bulletTitle}>Key Services Include:</h3>
                <ul className={styles.bulletPoints}>
                  {bulletPoints.map((point, pointIndex) => (
                    <li 
                      key={pointIndex} 
                      className={styles.bulletPoint}
                      style={{ 
                        animationDelay: `${pointIndex * 0.1 + 0.3}s` 
                      }}
                    >
                      <CheckCircle size={20} className={styles.bulletIcon} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className={`${styles.visualSide} ${isVisible ? styles.slideInRight : ''}`}>
            <div className={styles.iconContainer}>
              <div className={styles.mainIcon}>
                {icon}
              </div>
              <div className={styles.iconGlow}></div>
            </div>
            
            {/* Decorative Elements */}
            <div className={styles.decorativeElements}>
              <div className={styles.floatingElement1}></div>
              <div className={styles.floatingElement2}></div>
              <div className={styles.floatingElement3}></div>
            </div>

            {/* Stats/Numbers */}
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundShape1}></div>
        <div className={styles.backgroundShape2}></div>
      </div>
    </section>
  );
};

export default ServiceSection;