// src/components/Financing/FinancingProcess/FinancingProcess.jsx
import React, { useState } from 'react';
import { FileText, CheckCircle, Zap, CreditCard, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import { FINANCING_PROCESS_STEPS } from '../../../utils/constants';
import styles from './FinancingProcess.module.css';

const FinancingProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  // Icon mapping for process steps
  const iconMap = {
    FileText: <FileText size={32} />,
    CheckCircle: <CheckCircle size={32} />,
    Zap: <Zap size={32} />,
    CreditCard: <CreditCard size={32} />
  };

  // Use FINANCING_PROCESS_STEPS from constants, fallback to local data
  const processSteps = FINANCING_PROCESS_STEPS && FINANCING_PROCESS_STEPS.length > 0 
    ? FINANCING_PROCESS_STEPS 
    : [
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
          icon: 'Zap'
        },
        {
          step: '04',
          title: 'Completion & Settlement',
          description: 'After delivery confirmation, funds are settled between parties with full documentation and transparency.',
          icon: 'CreditCard'
        }
      ];

  return (
    <section 
      className={styles.process}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Our Financing Process</h2>
          <p className={styles.subtitle}>
            A streamlined, transparent approach to trade financing with clear milestones 
            and fast turnarounds at every stage.
          </p>
        </div>

        {/* Desktop Steps View (Vertical Timeline) */}
        <div className={`${styles.desktopView} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.timelineContainer}>
            {/* Vertical Line */}
            <div className={styles.verticalLine}></div>

            {/* Process Steps */}
            <div className={styles.stepsWrapper}>
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`${styles.stepRow} ${activeStep === index ? styles.active : ''}`}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={styles.timelineDot}>
                    <div className={styles.dotInner}></div>
                  </div>

                  {/* Step Content */}
                  <div className={styles.stepContent}>
                    <div className={styles.stepNumber}>{step.step}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>

                  {/* Step Icon */}
                  <div className={styles.stepIconContainer}>
                    <div className={styles.stepIcon}>
                      {iconMap[step.icon] || iconMap.FileText}
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className={styles.stepArrow}>
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Steps View (Horizontal Scrollable) */}
        <div className={`${styles.mobileView} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.mobileStepsContainer}>
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`${styles.mobileStep} ${activeStep === index ? styles.active : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className={styles.mobileStepNumber}>{step.step}</div>
                <div className={styles.mobileStepIcon}>
                  {iconMap[step.icon] || iconMap.FileText}
                </div>
                <h3 className={styles.mobileStepTitle}>{step.title}</h3>
                
                {activeStep === index && (
                  <p className={styles.mobileStepDescription}>{step.description}</p>
                )}

                {index < processSteps.length - 1 && (
                  <div className={styles.mobileStepConnector}>
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Expanded View */}
        <div className={`${styles.expandedMobileView} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.expandedContent}>
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`${styles.expandedCard} ${activeStep === index ? styles.active : ''}`}
                onClick={() => setActiveStep(activeStep === index ? -1 : index)}
              >
                <div className={styles.expandedHeader}>
                  <div className={styles.expandedNumber}>{step.step}</div>
                  <h3 className={styles.expandedTitle}>{step.title}</h3>
                  <div className={styles.expandedIcon}>
                    {iconMap[step.icon] || iconMap.FileText}
                  </div>
                </div>
                
                {activeStep === index && (
                  <div className={styles.expandedBody}>
                    <p className={styles.expandedDescription}>{step.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits Below */}
        <div className={`${styles.benefitsBox} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.benefitsContent}>
            <h3 className={styles.benefitsTitle}>Why This Process Works</h3>
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>✓</div>
                <div>
                  <h4>Transparent</h4>
                  <p>Know exactly where your application stands at every step</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>✓</div>
                <div>
                  <h4>Fast</h4>
                  <p>Approval within 48-72 hours of document submission</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>✓</div>
                <div>
                  <h4>Secure</h4>
                  <p>End-to-end encryption and verified transactions</p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>✓</div>
                <div>
                  <h4>Efficient</h4>
                  <p>Minimal documentation with maximum clarity</p>
                </div>
              </div>
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

export default FinancingProcess;