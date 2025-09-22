// src/components/Financing/FinancingSolutions/FinancingSolutions.jsx
import React from 'react';
import { 
  CreditCard, 
  DollarSign, 
  Shield, 
  TrendingUp, 
  FileText,
  CheckCircle 
} from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './FinancingSolutions.module.css';

const FinancingSolutions = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const financingSolutions = [
    {
      icon: <CreditCard size={40} />,
      title: 'Import Financing',
      description: 'Advance payment support for buyers to secure timely shipments from global suppliers.',
      features: [
        'Pre-shipment financing',
        'Purchase order funding',
        'Working capital support',
        'Flexible payment terms'
      ],
      color: '#3B82F6'
    },
    {
      icon: <DollarSign size={40} />,
      title: 'Export Financing',
      description: 'Financial support for vendors to fulfill orders without capital constraints.',
      features: [
        'Production financing',
        'Export credit facilities',
        'Post-shipment finance',
        'Receivables factoring'
      ],
      color: '#10B981'
    },
    {
      icon: <Shield size={40} />,
      title: 'Letters of Credit & Bank Guarantees',
      description: 'Secure payment instruments that protect both buyers and sellers in trade.',
      features: [
        'Documentary Credits (LC)',
        'Standby Letters of Credit',
        'Performance Guarantees',
        'Payment Guarantees'
      ],
      color: '#8B5CF6'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Trade Credit',
      description: 'Flexible credit terms for bulk transactions and ongoing business relationships.',
      features: [
        'Open account terms',
        'Consignment arrangements',
        'Deferred payment options',
        'Credit insurance coverage'
      ],
      color: '#F59E0B'
    },
    {
      icon: <FileText size={40} />,
      title: 'Structured Finance',
      description: 'Tailored financing solutions for high-value or complex international trade deals.',
      features: [
        'Commodity financing',
        'Supply chain finance',
        'Trade asset backed securities',
        'Multi-currency facilities'
      ],
      color: '#EF4444'
    }
  ];

  return (
    <section 
      className={styles.financingSolutions}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Our Key Financing Solutions</h2>
          <p className={styles.subtitle}>
            Comprehensive financing options tailored to meet the diverse needs of 
            global trade partners on our platform
          </p>
        </div>

        {/* Solutions Grid */}
        <div className={`${styles.solutionsGrid} ${isVisible ? styles.visible : ''}`}>
          {financingSolutions.map((solution, index) => (
            <div 
              key={index}
              className={styles.solutionCard}
              style={{ 
                '--accent-color': solution.color,
                animationDelay: `${index * 0.1}s` 
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  {solution.icon}
                </div>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.cardDescription}>
                  {solution.description}
                </p>

                <div className={styles.featuresList}>
                  {solution.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className={styles.featureItem}
                      style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.05) + 0.3}s` }}
                    >
                      <CheckCircle size={16} className={styles.featureIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.learnMoreBtn}>
                  Learn More
                  <div className={styles.btnArrow}>→</div>
                </button>
              </div>

              {/* Background decoration */}
              <div className={styles.cardDecoration}></div>
            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className={`${styles.infoSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Shield size={32} />
            </div>
            <div className={styles.infoContent}>
              <h3>Risk Mitigation</h3>
              <p>
                All our financing solutions include comprehensive risk assessment 
                and mitigation strategies to protect your investments and ensure 
                successful trade transactions.
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <TrendingUp size={32} />
            </div>
            <div className={styles.infoContent}>
              <h3>Competitive Rates</h3>
              <p>
                We partner with leading financial institutions worldwide to offer 
                competitive rates and flexible terms that support your business growth 
                and cash flow requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
      </div>
    </section>
  );
};

export default FinancingSolutions;