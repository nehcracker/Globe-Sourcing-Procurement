// src/pages/VendorRegistration/components/PageSections/HowToJoinProcess.jsx
import React from 'react';
import { FileText, UserCheck, Package, Truck, CheckCircle } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import styles from './HowToJoinProcess.module.css';

const HowToJoinProcess = () => {
  const { ref: containerRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const processSteps = [
    {
      id: 1,
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete our comprehensive vendor registration form with your company details, product information, and business credentials.',
      details: [
        'Company registration documents',
        'Product catalogs and specifications', 
        'Business licenses and certifications',
        'Contact and banking information'
      ],
      timeframe: '15-30 minutes',
      status: 'active'
    },
    {
      id: 2,
      icon: UserCheck,
      title: 'Verification Process',
      description: 'Our team conducts a thorough review of your application, verifies your credentials, and may conduct a brief interview.',
      details: [
        'Document verification and validation',
        'Business legitimacy check',
        'Quality standards assessment',
        'Reference and background verification'
      ],
      timeframe: '2-5 business days',
      status: 'pending'
    },
    {
      id: 3,
      icon: Package,
      title: 'Product Onboarding',
      description: 'Once approved, we help you set up your product listings, pricing, and inventory management systems.',
      details: [
        'Product catalog setup',
        'Pricing and MOQ configuration',
        'Inventory management training',
        'Platform orientation session'
      ],
      timeframe: '1-2 business days',
      status: 'upcoming'
    },
    {
      id: 4,
      icon: Truck,
      title: 'Start Selling',
      description: 'Your products go live on our platform and you can start receiving orders from verified buyers worldwide.',
      details: [
        'Product listings go live',
        'Access to buyer network',
        'Order management tools',
        'Payment processing setup'
      ],
      timeframe: 'Immediate',
      status: 'upcoming'
    },
    {
      id: 5,
      icon: CheckCircle,
      title: 'Ongoing Support',
      description: 'Receive continuous support, account management, marketing assistance, and regular performance reviews.',
      details: [
        'Dedicated account manager',
        'Marketing and promotion support',
        'Regular performance analytics',
        '24/7 technical support'
      ],
      timeframe: 'Ongoing',
      status: 'upcoming'
    }
  ];

  return (
    <section className={styles.howToJoinProcess} ref={containerRef}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>How to Join Our Vendor Network</h2>
          <p className={styles.subtitle}>
            Follow our simple 5-step process to become a verified vendor and start reaching global buyers
          </p>
        </div>

        {/* Process Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={step.id}
                className={`${styles.timelineStep} ${styles[step.status]} ${
                  isEven ? styles.left : styles.right
                } ${isVisible ? styles.visible : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className={styles.stepNumber}>
                  <span>{step.id}</span>
                </div>

                {/* Step Content */}
                <div className={styles.stepContent}>
                  {/* Step Header */}
                  <div className={styles.stepHeader}>
                    <div className={styles.stepIcon}>
                      <IconComponent size={24} />
                    </div>
                    <div className={styles.stepTitleSection}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <span className={styles.stepTimeframe}>{step.timeframe}</span>
                    </div>
                  </div>

                  {/* Step Description */}
                  <p className={styles.stepDescription}>{step.description}</p>

                  {/* Step Details */}
                  <div className={styles.stepDetails}>
                    <h4 className={styles.detailsTitle}>What's Included:</h4>
                    <ul className={styles.detailsList}>
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className={styles.detailItem}>
                          <CheckCircle size={16} className={styles.detailIcon} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step Status Indicator */}
                  <div className={styles.stepStatus}>
                    <div className={styles.statusIndicator}>
                      <div className={styles.statusDot} />
                      <span className={styles.statusText}>
                        {step.status === 'active' && 'Ready to Start'}
                        {step.status === 'pending' && 'After Application'}
                        {step.status === 'upcoming' && 'Coming Next'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Facts */}
        <div className={`${styles.quickFacts} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.factsGrid}>
            <div className={styles.factItem}>
              <div className={styles.factNumber}>95%</div>
              <div className={styles.factLabel}>Approval Rate</div>
              <div className={styles.factDescription}>Most applications approved within 48 hours</div>
            </div>
            <div className={styles.factItem}>
              <div className={styles.factNumber}>24-48h</div>
              <div className={styles.factLabel}>Processing Time</div>
              <div className={styles.factDescription}>Fast-track verification process</div>
            </div>
            <div className={styles.factItem}>
              <div className={styles.factNumber}>24/7</div>
              <div className={styles.factLabel}>Support Available</div>
              <div className={styles.factDescription}>Continuous assistance and guidance</div>
            </div>
            <div className={styles.factItem}>
              <div className={styles.factNumber}>$0</div>
              <div className={styles.factLabel}>Registration Fee</div>
              <div className={styles.factDescription}>Completely free to join and start selling</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${styles.processCtaSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
          <p className={styles.ctaDescription}>
            Join thousands of successful vendors who are already growing their business with our platform
          </p>
          <button 
            className={styles.ctaButton}
            onClick={() => {
              const formSection = document.getElementById('vendor-form-section');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start Application Process
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgElement1} />
        <div className={styles.bgElement2} />
        <div className={styles.bgElement3} />
      </div>
    </section>
  );
};

export default HowToJoinProcess;
