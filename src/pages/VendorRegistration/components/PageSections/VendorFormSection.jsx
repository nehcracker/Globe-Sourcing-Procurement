// src/pages/VendorRegistration/components/PageSections/VendorFormSection.jsx
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Clock, Shield, Award } from 'lucide-react';
import MultiStepForm from '../MultiStepForm/MultiStepForm';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import styles from './VendorFormSection.module.css';

const VendorFormSection = () => {
  const { ref: containerRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const formSectionRef = useRef(null);

  useEffect(() => {
    // Set the ref for smooth scrolling from other sections
    if (formSectionRef.current) {
      formSectionRef.current.id = 'vendor-form-section';
    }
  }, []);

  const processSteps = [
    {
      id: 1,
      icon: CheckCircle,
      title: 'Quick Registration',
      description: '4-step form takes only 15-20 minutes to complete',
      time: '15-20 min'
    },
    {
      id: 2,
      icon: Clock,
      title: 'Fast Verification',
      description: 'Our team reviews applications within 24-48 hours',
      time: '24-48 hrs'
    },
    {
      id: 3,
      icon: Shield,
      title: 'Account Setup',
      description: 'Get verified vendor status and platform access',
      time: '1-2 hrs'
    },
    {
      id: 4,
      icon: Award,
      title: 'Start Selling',
      description: 'Begin receiving orders from verified buyers',
      time: 'Immediate'
    }
  ];

  const formBenefits = [
    {
      id: 1,
      title: 'No Registration Fees',
      description: 'Join our platform completely free with no hidden costs',
      highlight: 'FREE'
    },
    {
      id: 2,
      title: 'Global Buyer Network',
      description: 'Access to 500+ verified buyers across 50+ countries',
      highlight: '500+ BUYERS'
    },
    {
      id: 3,
      title: 'Secure Payments',
      description: 'Protected transactions with guaranteed payment processing',
      highlight: '100% SECURE'
    },
    {
      id: 4,
      title: 'Dedicated Support',
      description: '24/7 customer support and account management assistance',
      highlight: '24/7 SUPPORT'
    }
  ];

  const trustIndicators = [
    {
      id: 1,
      icon: '🔒',
      text: 'SSL Encrypted'
    },
    {
      id: 2,
      icon: '✅',
      text: 'Verified Platform'
    },
    {
      id: 3,
      icon: '🌟',
      text: '4.9/5 Rating'
    },
    {
      id: 4,
      icon: '📊',
      text: '12K+ Active Vendors'
    }
  ];

  return (
    <section className={styles.vendorFormSection} ref={containerRef}>
      <div className={styles.container} ref={formSectionRef}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>Ready to Join Our Vendor Network?</h2>
            <p className={styles.sectionSubtitle}>
              Complete your registration in just a few steps and start connecting with global buyers today
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className={styles.trustIndicators}>
            {trustIndicators.map((indicator) => (
              <div key={indicator.id} className={styles.trustItem}>
                <span className={styles.trustIcon}>{indicator.icon}</span>
                <span className={styles.trustText}>{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className={`${styles.mainContent} ${isVisible ? styles.visible : ''}`}>
          {/* Left Side - Process Steps & Benefits */}
          <div className={styles.leftColumn}>
            {/* Process Steps */}
            <div className={styles.processSection}>
              <h3 className={styles.processTitle}>
                <ArrowRight size={24} className={styles.titleIcon} />
                Registration Process
              </h3>
              <div className={styles.processSteps}>
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  
                  return (
                    <div 
                      key={step.id} 
                      className={`${styles.processStep} ${isVisible ? styles.visible : ''}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={styles.stepIconWrapper}>
                        <div className={styles.stepIcon}>
                          <IconComponent size={20} />
                        </div>
                        <span className={styles.stepNumber}>{step.id}</span>
                      </div>
                      <div className={styles.stepContent}>
                        <div className={styles.stepHeader}>
                          <h4 className={styles.stepTitle}>{step.title}</h4>
                          <span className={styles.stepTime}>{step.time}</span>
                        </div>
                        <p className={styles.stepDescription}>{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Benefits */}
            <div className={styles.benefitsSection}>
              <h3 className={styles.benefitsTitle}>Why Register Today?</h3>
              <div className={styles.benefitsList}>
                {formBenefits.map((benefit, index) => (
                  <div 
                    key={benefit.id} 
                    className={`${styles.benefitItem} ${isVisible ? styles.visible : ''}`}
                    style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                  >
                    <div className={styles.benefitHighlight}>{benefit.highlight}</div>
                    <div className={styles.benefitContent}>
                      <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                      <p className={styles.benefitDescription}>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className={styles.additionalInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>💡</div>
                <div className={styles.infoContent}>
                  <h4 className={styles.infoTitle}>Need Help?</h4>
                  <p className={styles.infoDescription}>
                    Our support team is available 24/7 to assist you with the registration process.
                  </p>
                  <button className={styles.helpButton}>Contact Support</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className={styles.rightColumn}>
            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Vendor Registration Form</h3>
                <p className={styles.formDescription}>
                  All fields marked with * are required. Your information is secure and protected.
                </p>
              </div>
              
              {/* Multi-Step Form Integration */}
              <div className={styles.formContainer}>
                <MultiStepForm />
              </div>
              
              {/* Form Footer */}
              <div className={styles.formFooter}>
                <div className={styles.securityNote}>
                  <Shield size={16} className={styles.securityIcon} />
                  <span className={styles.securityText}>
                    Your data is protected with 256-bit SSL encryption
                  </span>
                </div>
                
                <div className={styles.termsNote}>
                  <p className={styles.termsText}>
                    By registering, you agree to our{' '}
                    <a href="/terms" className={styles.termsLink}>Terms of Service</a>
                    {' '}and{' '}
                    <a href="/privacy" className={styles.termsLink}>Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Guarantee */}
        <div className={`${styles.successGuarantee} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.guaranteeContent}>
            <div className={styles.guaranteeIcon}>🎯</div>
            <div className={styles.guaranteeText}>
              <h4 className={styles.guaranteeTitle}>Success Guarantee</h4>
              <p className={styles.guaranteeDescription}>
                95% of vendors receive their first order within 30 days of approval. Join thousands of successful vendors today!
              </p>
            </div>
            <div className={styles.guaranteeStats}>
              <div className={styles.guaranteeStat}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
              <div className={styles.guaranteeStat}>
                <span className={styles.statNumber}>30</span>
                <span className={styles.statLabel}>Days Average</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button for Mobile */}
        <div className={styles.mobileFloatingAction}>
          <button 
            className={styles.floatingButton}
            onClick={() => {
              const formElement = document.querySelector('[class*="multiStepForm"]');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            <ArrowRight size={20} />
            <span>Start Registration</span>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgGradient1} />
        <div className={styles.bgGradient2} />
        <div className={styles.bgPattern} />
      </div>
    </section>
  );
};

export default VendorFormSection;