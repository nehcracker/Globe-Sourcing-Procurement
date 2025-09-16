// src/components/HowItWorks/ProcessStep.jsx
import React from 'react';
import { Upload, ShoppingCart, CheckCircle, ArrowRight } from 'lucide-react';
import styles from './ProcessStep.module.css';

// Icon mapping for process steps
const iconMap = {
  Upload: Upload,
  ShoppingCart: ShoppingCart,
  CheckCircle: CheckCircle
};

const ProcessStep = ({ step, index, isVisible, isLast }) => {
  const IconComponent = iconMap[step.icon] || Upload;

  return (
    <div 
      className={`${styles.processStep} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      {/* Step Number */}
      <div className={styles.stepNumber}>
        <span className={styles.number}>{step.step}</span>
      </div>

      {/* Step Content */}
      <div className={styles.stepContent}>
        {/* Icon Container */}
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper}>
            <IconComponent size={28} className={styles.icon} />
          </div>
          <div className={styles.iconGlow}></div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.stepTitle}>{step.title}</h3>
          <p className={styles.stepDescription}>{step.description}</p>
        </div>

        {/* Interactive Elements */}
        <div className={styles.interactiveElements}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
          
          {!isLast && (
            <div className={styles.nextArrow}>
              <ArrowRight size={16} />
            </div>
          )}
        </div>
      </div>

      {/* Background Decoration */}
      <div className={styles.stepDecoration}></div>
      
      {/* Hover Effect */}
      <div className={styles.hoverEffect}></div>
    </div>
  );
};

export default ProcessStep;