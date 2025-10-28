// src/components/Financing/IndustriesSupported/IndustryCard.jsx
import React from 'react';
import { ChevronDown, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import styles from './IndustriesSupported.module.css';

const IndustryCard = ({ industry, index, isExpanded, onToggle, isVisible, icon }) => {
  return (
    <div
      className={`${styles.industryCard} ${isExpanded ? styles.expanded : ''} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onToggle}
    >
      {/* Card Header - Always Visible */}
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer} style={{ '--industry-color': industry.color }}>
          <div className={styles.iconBg}></div>
          <div className={styles.icon}>{icon}</div>
        </div>

        <div className={styles.titleSection}>
          <h4 className={styles.industryName}>{industry.name}</h4>
          <p className={styles.industryDesc}>{industry.description}</p>
        </div>

        <div className={styles.expandIcon}>
          <ChevronDown size={24} />
        </div>
      </div>

      {/* Card Body - Expandable */}
      {isExpanded && (
        <div className={styles.cardBody}>
          {/* Specialization */}
          <div className={styles.section}>
            <h5 className={styles.sectionTitle}>
              <TrendingUp size={16} />
              Our Specialization
            </h5>
            <ul className={styles.list}>
              {industry.specialization.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <div className={styles.section}>
            <h5 className={styles.sectionTitle}>Common Products & Services</h5>
            <div className={styles.tagsList}>
              {industry.examples.map((example, idx) => (
                <span key={idx} className={styles.tag}>{example}</span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className={styles.section}>
            <h5 className={styles.sectionTitle}>
              <AlertCircle size={16} />
              Industry Challenges
            </h5>
            <ul className={styles.list}>
              {industry.challenges.map((challenge, idx) => (
                <li key={idx}>
                  <span className={styles.bullet}>•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className={styles.section}>
            <h5 className={styles.sectionTitle}>
              <CheckCircle size={16} />
              Our Solutions
            </h5>
            <ul className={styles.list}>
              {industry.solutions.map((solution, idx) => (
                <li key={idx}>
                  <CheckCircle size={14} />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <button className={styles.applyButton}>
            Get Financing for {industry.name}
          </button>
        </div>
      )}
    </div>
  );
};

export default IndustryCard;