// src/components/Financing/WhatWeFinance/FinanceCard.jsx
import React from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';
import styles from './WhatWeFinance.module.css';

const FinanceCard = ({ category, index, isExpanded, onToggle, isVisible }) => {
  return (
    <div
      className={`${styles.card} ${isExpanded ? styles.expanded : ''} ${isVisible ? styles.visible : ''}`}
      style={{
        '--card-color': category.color,
        animationDelay: `${index * 0.1}s`
      }}
      onClick={onToggle}
    >
      {/* Card Header - Always Visible */}
      <div className={styles.cardHeader}>
        <div className={styles.cardIconContainer}>
          <div className={styles.cardIcon}>{category.icon}</div>
        </div>

        <div className={styles.cardTitleSection}>
          <h3 className={styles.cardTitle}>{category.title}</h3>
          <p className={styles.cardDescription}>{category.description}</p>
        </div>

        <div className={styles.expandButton}>
          <ChevronDown size={24} />
        </div>
      </div>

      {/* Card Body - Expandable */}
      {isExpanded && (
        <div className={styles.cardBody}>
          {/* Benefits */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Key Benefits</h4>
            <ul className={styles.list}>
              {category.benefits.map((benefit, idx) => (
                <li key={idx} className={styles.listItem}>
                  <CheckCircle size={16} className={styles.listIcon} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Common Examples</h4>
            <ul className={styles.list}>
              {category.examples.map((example, idx) => (
                <li key={idx} className={styles.listItem}>
                  <CheckCircle size={16} className={styles.listIcon} />
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documentation Needed */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Documentation Needed</h4>
            <ul className={styles.list}>
              {category.documentationNeeded.map((doc, idx) => (
                <li key={idx} className={styles.listItem}>
                  <CheckCircle size={16} className={styles.listIcon} />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <button className={styles.applyButton}>
            Apply for {category.title}
          </button>
        </div>
      )}
    </div>
  );
};

export default FinanceCard;