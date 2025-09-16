// src/components/HowItWorks/HowItWorks.jsx
import React from 'react';
import ProcessStep from './ProcessStep';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { PROCESS_STEPS } from '../../utils/constants';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section 
      id="how-it-works" 
      className={styles.howItWorks}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>How It Works</h2>
          <p className={styles.subtitle}>
            Simple, transparent process connecting global suppliers with buyers through our trusted platform
          </p>
        </div>

        {/* Process Steps */}
        <div className={`${styles.processContainer} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.processSteps}>
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep
                key={step.step}
                step={step}
                index={index}
                isVisible={isVisible}
                isLast={index === PROCESS_STEPS.length - 1}
              />
            ))}
          </div>

          {/* Connecting Lines */}
          <div className={styles.connectingLines}>
            {PROCESS_STEPS.map((_, index) => (
              index < PROCESS_STEPS.length - 1 && (
                <div 
                  key={index}
                  className={`${styles.connectingLine} ${isVisible ? styles.animate : ''}`}
                  style={{ animationDelay: `${(index + 1) * 0.3}s` }}
                />
              )
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`${styles.bottomSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.processHighlight}>
            <h3 className={styles.highlightTitle}>Why Choose Our Process?</h3>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>🛡️</div>
                <div className={styles.highlightContent}>
                  <h4>Verified Suppliers</h4>
                  <p>All vendors go through rigorous verification process</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>⚡</div>
                <div className={styles.highlightContent}>
                  <h4>Fast Processing</h4>
                  <p>Quick matching and procurement facilitation</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <div className={styles.highlightIcon}>🎯</div>
                <div className={styles.highlightContent}>
                  <h4>End-to-End Service</h4>
                  <p>From sourcing to delivery, we handle everything</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
            <div className={styles.ctaButtons}>
              <button 
                className={styles.primaryCta}
                onClick={() => document.getElementById('buyer-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>I'm a Buyer</span>
                <div className={styles.ctaIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <button 
                className={styles.secondaryCta}
                onClick={() => document.getElementById('vendor-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>I'm a Vendor</span>
                <div className={styles.ctaIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
        <div className={styles.floatingElement3}></div>
      </div>
    </section>
  );
};

export default HowItWorks;