// src/components/Financing/BenefitsSection/BenefitsSection.jsx
import React, { useState } from 'react';
import { 
  TrendingUp, 
  Clock, 
  Globe, 
  Shield, 
  DollarSign, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import styles from './BenefitsSection.module.css';

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  // Main benefits
  const mainBenefits = [
    {
      id: 1,
      icon: <TrendingUp size={32} />,
      title: '100% Financing',
      description: 'Complete financing coverage on approved transactions with no cash requirement upfront',
      color: '#3b82f6',
      details: [
        'Full transaction value covered',
        'No partial financing required',
        'Flexible repayment terms',
        'Competitive interest rates'
      ]
    },
    {
      id: 2,
      icon: <Clock size={32} />,
      title: 'Fast Approval',
      description: 'Rapid approval process with decisions made within 48-72 hours of document submission',
      color: '#059669',
      details: [
        '48-72 hour turnaround',
        'Streamlined documentation',
        'Real-time status updates',
        'Quick fund disbursement'
      ]
    },
    {
      id: 3,
      icon: <Globe size={32} />,
      title: 'Global Coverage',
      description: 'Financing available across 50+ countries with verified partners and local expertise',
      color: '#f59e0b',
      details: [
        'Worldwide transaction support',
        'Multi-currency options',
        'Local partner network',
        'Cross-border expertise'
      ]
    },
    {
      id: 4,
      icon: <Shield size={32} />,
      title: 'Secure & Safe',
      description: 'End-to-end encryption and verified transactions with full compliance checks',
      color: '#ec4899',
      details: [
        'Military-grade encryption',
        'Verified counterparties',
        'Compliance audits',
        'Transaction transparency'
      ]
    }
  ];

  // Secondary benefits
  const secondaryBenefits = [
    {
      icon: <DollarSign size={24} />,
      title: 'Transparent Pricing',
      description: 'Clear fee structure with no hidden charges. Know exactly what you pay.',
      items: ['No setup fees', 'Flat rate structure', 'No surprise charges', 'Monthly statements']
    },
    {
      icon: <Users size={24} />,
      title: 'Expert Support',
      description: '24/7 dedicated support team available across multiple time zones to assist you.',
      items: ['24/7 availability', 'Expert advisors', 'Multiple languages', 'Quick response time']
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Verified Transactions',
      description: 'All transactions undergo thorough verification to ensure security and compliance.',
      items: ['KYC verification', 'Document review', 'Counterparty validation', 'Audit trail']
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Business Growth',
      description: 'Expand your business without cash flow constraints with our flexible solutions.',
      items: ['Scalable financing', 'Growth support', 'Recurring deals', 'Relationship banking']
    }
  ];

  // Comparison data - Our vs Traditional
  const comparisonData = [
    {
      aspect: 'Approval Time',
      ourService: '48-72 Hours',
      traditional: '2-4 Weeks',
      icon: '⏱️'
    },
    {
      aspect: 'Documentation',
      ourService: 'Streamlined',
      traditional: 'Extensive',
      icon: '📋'
    },
    {
      aspect: 'Coverage',
      ourService: '100%',
      traditional: '60-80%',
      icon: '📊'
    },
    {
      aspect: 'Global Reach',
      ourService: '50+ Countries',
      traditional: '10-20 Countries',
      icon: '🌍'
    },
    {
      aspect: 'Support',
      ourService: '24/7 Available',
      traditional: 'Business Hours',
      icon: '💬'
    },
    {
      aspect: 'Digital Platform',
      ourService: 'Full Digital',
      traditional: 'Manual Process',
      icon: '💻'
    }
  ];

  const stats = [
    { value: '2,500+', label: 'Successful Transactions', icon: '✓' },
    { value: '$50M+', label: 'Financing Deployed', icon: '💰' },
    { value: '99%', label: 'Client Satisfaction', icon: '⭐' },
    { value: '50+', label: 'Countries Served', icon: '🌏' }
  ];

  return (
    <section 
      className={styles.benefitsSection}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Why Choose Our Financing?</h2>
          <p className={styles.subtitle}>
            Industry-leading benefits designed to streamline your trade financing 
            and accelerate your global business growth.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className={`${styles.mainBenefitsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.benefitsGrid}>
            {mainBenefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`${styles.benefitCard} ${activeTab === index ? styles.active : ''}`}
                style={{ '--benefit-color': benefit.color, animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveTab(index)}
              >
                {/* Icon Container */}
                <div className={styles.iconContainer}>
                  <div className={styles.iconBg}></div>
                  <div className={styles.icon}>{benefit.icon}</div>
                </div>

                {/* Content */}
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>

                {/* Details - Show on hover/active */}
                <div className={styles.detailsList}>
                  {benefit.details.map((detail, idx) => (
                    <div key={idx} className={styles.detailItem}>
                      <CheckCircle size={16} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className={styles.cardArrow}>
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Benefits */}
        <div className={`${styles.secondaryBenefitsSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.secondaryTitle}>Additional Benefits</h3>
          <div className={styles.secondaryGrid}>
            {secondaryBenefits.map((benefit, index) => (
              <div 
                key={index}
                className={styles.secondaryCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.secondaryIcon}>{benefit.icon}</div>
                <h4 className={styles.secondaryCardTitle}>{benefit.title}</h4>
                <p className={styles.secondaryCardDesc}>{benefit.description}</p>
                
                <ul className={styles.itemsList}>
                  {benefit.items.map((item, idx) => (
                    <li key={idx}>
                      <span className={styles.itemDot}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className={`${styles.comparisonSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.comparisonTitle}>Globe Sourcing vs. Traditional Financing</h3>
          
          <div className={styles.comparisonTable}>
            <div className={styles.comparisonHeader}>
              <div className={styles.aspectCol}>Aspect</div>
              <div className={styles.ourCol}>Our Service</div>
              <div className={styles.tradCol}>Traditional Banks</div>
            </div>

            {comparisonData.map((item, index) => (
              <div key={index} className={styles.comparisonRow}>
                <div className={styles.aspectCol}>
                  <span className={styles.aspectIcon}>{item.icon}</span>
                  {item.aspect}
                </div>
                <div className={styles.ourCol}>
                  <span className={styles.badge}>{item.ourService}</span>
                </div>
                <div className={styles.tradCol}>
                  <span>{item.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`${styles.statsSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.statsTitle}>Our Track Record</h3>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={styles.statItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`${styles.ctaFinal} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3>Experience the Globe Sourcing Difference</h3>
            <p>Join thousands of businesses worldwide that have transformed their trade financing with us.</p>
          </div>
          <button className={styles.ctaBtn}>
            <span>Start Your Application</span>
            <ArrowRight size={20} />
          </button>
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

export default BenefitsSection;