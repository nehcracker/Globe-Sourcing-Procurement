// src/components/About/CoreValues/ValueCard.jsx
import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import styles from './ValueCard.module.css';

const ValueCard = ({ value, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.valueCard} ${isVisible ? styles.visible : ''}`}
      style={{ 
        animationDelay: `${index * 0.1 + 0.3}s`,
        '--accent-color': value.color
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          {value.icon}
        </div>
        <div className={styles.cardTitleContainer}>
          <h3 className={styles.cardTitle}>{value.title}</h3>
          <div className={styles.expandIndicator}>
            <ChevronRight 
              size={16} 
              className={`${styles.chevron} ${isHovered ? styles.rotated : ''}`}
            />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <p className={styles.cardDescription}>
          {value.description}
        </p>

        {/* Details List - Shows on Hover */}
        <div className={`${styles.detailsList} ${isHovered ? styles.expanded : ''}`}>
          <div className={styles.detailsHeader}>
            <span className={styles.detailsTitle}>How we deliver:</span>
          </div>
          <ul className={styles.detailsItems}>
            {value.details.map((detail, detailIndex) => (
              <li 
                key={detailIndex} 
                className={styles.detailItem}
                style={{ animationDelay: `${detailIndex * 0.1}s` }}
              >
                <Check size={14} className={styles.checkIcon} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer */}
      <div className={styles.cardFooter}>
        <div className={styles.cardNumber}>
          {String(value.id).padStart(2, '0')}
        </div>
        <div className={styles.hoverPrompt}>
          <span className={styles.promptText}>Hover to explore</span>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.cardBackground}>
        <div className={styles.backgroundPattern}></div>
        <div className={styles.backgroundGradient}></div>
      </div>
    </div>
  );
};

export default ValueCard;