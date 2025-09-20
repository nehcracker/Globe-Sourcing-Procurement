// src/components/About/WhyChooseUs/FeatureCard.jsx
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ feature, index, isVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`${styles.featureCard} ${isVisible ? styles.visible : ''}`}
      style={{ 
        animationDelay: `${index * 0.15 + 0.2}s`,
        '--accent-color': feature.color
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          {feature.icon}
          <div className={styles.iconGlow}></div>
        </div>
        <div className={styles.headerContent}>
          <h3 className={styles.featureTitle}>{feature.title}</h3>
          <div className={styles.statsBadge}>
            <span className={styles.statsNumber}>{feature.stats.number}</span>
            <span className={styles.statsLabel}>{feature.stats.label}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <p className={styles.featureDescription}>
          {feature.description}
        </p>

        {/* Benefits List */}
        <div className={`${styles.benefitsList} ${isExpanded ? styles.expanded : ''}`}>
          <div className={styles.benefitsHeader}>
            <span className={styles.benefitsTitle}>Key Benefits:</span>
          </div>
          <ul className={styles.benefitsItems}>
            {feature.benefits.map((benefit, benefitIndex) => (
              <li 
                key={benefitIndex} 
                className={styles.benefitItem}
                style={{ animationDelay: `${benefitIndex * 0.1}s` }}
              >
                <Check size={16} className={styles.checkIcon} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer */}
      <div className={styles.cardFooter}>
        <div className={styles.expandIndicator}>
          <ArrowRight 
            size={18} 
            className={`${styles.arrow} ${isExpanded ? styles.expanded : ''}`}
          />
          <span className={styles.expandText}>
            {isExpanded ? 'Showing benefits' : 'Hover to explore'}
          </span>
        </div>
      </div>

      {/* Card Background Effects */}
      <div className={styles.cardEffects}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.hoverOverlay}></div>
        <div className={styles.cornerAccent}></div>
      </div>
    </div>
  );
};

export default FeatureCard;