// src/components/Financing/ProcessSteps/ProcessSteps.jsx
import React from 'react';
import { FileText, CheckCircle, Shield, CreditCard } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './ProcessSteps.module.css';

const ProcessSteps = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const iconMap = {
    FileText: FileText,
    CheckCircle: CheckCircle,
    Shield: Shield,
    CreditCard: CreditCard
  };

  const processSteps = [
    {
      step: '01',
      title: 'Transaction Review',
      description: 'We assess the trade order placed on our platform, review supplier contracts, and evaluate financing needs.',
      icon: 'FileText'
    },
    {
      step: '02',
      title: 'Financing Approval',
      description: 'We arrange tailored financing through Letters of Credit, Bank Guarantees, trade credit, or structured finance.',
      icon: 'CheckCircle'
    },
    {
      step: '03',
      title: 'Secure Payment Flow',
      description: 'Vendors receive advance payments or payment assurance while buyers gain financing without straining cash flow.',
      icon: 'Shield'
    },
    {
      step: '04',
      title: 'Completion & Settlement',
      description: 'After delivery confirmation, funds are settled between parties with full documentation and transparency.',
      icon: 'CreditCard'
    }
  ];

  return (
    <section className={styles.processSteps} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>How Our Financing Works</h2>
          <p className={styles.subtitle}>
            A seamless 4-step process to secure your trade financing and ensure successful transactions
          </p>
        </div>

        {/* Process Steps */}
        <div className={`${styles.stepsContainer} ${isVisible ? styles.visible : ''}`}>
          {processSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            
            return (
              <div 
                key={index}
                className={styles.stepCard}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.stepNumber}>{step.step}</div>
                
                <div className={styles.stepIcon}>
                  <IconComponent size={32} />
                </div>

                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>

                {/* Connecting line (except for last step) */}
                {index < processSteps.length - 1 && (
                  <div className={styles.connectingLine}></div>
                )}

                {/* Background decoration */}
                <div className={styles.stepDecoration}></div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className={`${styles.benefitsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.benefitCard}>
            <h3>For Vendors</h3>
            <p>Financing ensures you can produce, ship, and deliver large orders without capital strain.</p>
          </div>
          
          <div className={styles.benefitCard}>
            <h3>For Buyers</h3>
            <p>Financing allows you to secure products in bulk while maintaining liquidity.</p>
          </div>
          
          <div className={styles.benefitCard}>
            <h3>For Both</h3>
            <p>Every transaction gains trust, speed, and financial security through our platform.</p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgPattern}></div>
      </div>
    </section>
  );
};

export default ProcessSteps;