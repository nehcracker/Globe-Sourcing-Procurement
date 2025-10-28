// src/components/Financing/FinancingOverview/FinancingOverview.jsx
import React from 'react';
import { CheckCircle, Zap, TrendingUp, Shield, Globe, FileText, Clock } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './FinancingOverview.module.css';

const FinancingOverview = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  // How it works steps
  const howItWorks = [
    {
      step: '01',
      title: 'Submit Request',
      description: 'Submit your trade financing request with transaction details and required documents.',
      icon: <FileText size={24} />,
      color: '#3b82f6'
    },
    {
      step: '02',
      title: 'KYC & Review',
      description: 'Undergo Know Your Customer verification and comprehensive transaction review.',
      icon: <Shield size={24} />,
      color: '#059669'
    },
    {
      step: '03',
      title: 'Fast Approval',
      description: 'Receive financing approval within 48-72 hours of document submission.',
      icon: <Zap size={24} />,
      color: '#f59e0b'
    },
    {
      step: '04',
      title: 'Funds Released',
      description: 'Funds released directly for shipment or supplier payment arrangements.',
      icon: <TrendingUp size={24} />,
      color: '#10b981'
    }
  ];

  // What we finance categories
  const whatWeFinance = [
    {
      category: 'Imports',
      description: 'Machinery, raw materials, and finished products',
      examples: ['Equipment', 'Raw Materials', 'Components'],
      icon: '📥'
    },
    {
      category: 'Exports',
      description: 'Minerals, agricultural commodities, and manufactured goods',
      examples: ['Minerals', 'Agriculture', 'Textiles'],
      icon: '📤'
    },
    {
      category: 'Commodity Trading',
      description: 'Energy, metals, grains, and bulk commodity transactions',
      examples: ['Oil & Gas', 'Metals', 'Grains'],
      icon: '📊'
    },
    {
      category: 'Trade Contracts',
      description: 'Verified supplier and buyer contracts with supporting documentation',
      examples: ['B2B Contracts', 'Proforma Invoices', 'Letters of Intent'],
      icon: '📋'
    }
  ];

  // Key benefits
  const benefits = [
    {
      title: '100% Financing',
      description: 'Complete financing on approved transactions covering full value',
      icon: <TrendingUp size={20} />
    },
    {
      title: 'Fast Approval',
      description: 'Rapid approval process within 48-72 hours of submission',
      icon: <Clock size={20} />
    },
    {
      title: 'Global Coverage',
      description: 'Financing available across 50+ countries worldwide',
      icon: <Globe size={20} />
    },
    {
      title: 'Transparent Fees',
      description: 'Clear, competitive pricing with no hidden charges',
      icon: <CheckCircle size={20} />
    }
  ];

  return (
    <section 
      className={styles.overview}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Global Trade Financing</h2>
          <p className={styles.subtitle}>
            We simplify the financing process with a transparent, efficient system designed 
            for modern global trade and commerce.
          </p>
        </div>

        {/* How It Works Section */}
        <div className={`${styles.howItWorksSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.stepsContainer}>
            {howItWorks.map((item, index) => (
              <div 
                key={index}
                className={styles.stepCard}
                style={{ '--accent-color': item.color, animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.stepNumber}>
                  <span>{item.step}</span>
                </div>
                
                <div className={styles.stepIcon}>
                  {item.icon}
                </div>

                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>

                {index < howItWorks.length - 1 && (
                  <div className={styles.stepConnector} />
                )}
              </div>
            ))}
          </div>

          {/* Timeline Line (Desktop) */}
          <div className={styles.timelineLineContainer}>
            <div className={styles.timelineLine} />
          </div>
        </div>

        {/* What We Finance Section */}
        <div className={`${styles.whatWeFinanceSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.sectionInner}>
            <h3 className={styles.sectionTitle}>What We Finance</h3>
            <p className={styles.sectionDescription}>
              Our comprehensive financing solutions cover all types of international trade transactions
            </p>

            <div className={styles.categoriesGrid}>
              {whatWeFinance.map((item, index) => (
                <div 
                  key={index}
                  className={styles.categoryCard}
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className={styles.categoryIcon}>{item.icon}</div>
                  <h4 className={styles.categoryName}>{item.category}</h4>
                  <p className={styles.categoryDesc}>{item.description}</p>
                  
                  <div className={styles.examplesContainer}>
                    <p className={styles.examplesLabel}>Examples:</p>
                    <ul className={styles.examplesList}>
                      {item.examples.map((example, idx) => (
                        <li key={idx}>
                          <CheckCircle size={14} />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className={`${styles.benefitsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.sectionInner}>
            <h3 className={styles.sectionTitle}>Why Choose Our Financing?</h3>

            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={styles.benefitCard}
                  style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                >
                  <div className={styles.benefitIcon}>
                    {benefit.icon}
                  </div>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaBox} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
            <p className={styles.ctaDescription}>
              Apply for trade financing today and unlock your global trading potential
            </p>
          </div>
          <button className={styles.ctaButton}>
            <span>Apply Now</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinancingOverview;