// src/pages/VendorRegistration/components/MultiStepForm/StepIndicator.jsx
import React from 'react';
import { Check, Circle, Lock } from 'lucide-react';
import styles from './StepIndicator.module.css';

const StepIndicator = ({
  steps,
  currentStep,
  stepValidation,
  onStepClick,
  className = ''
}) => {
  const getStepStatus = (step) => {
    if (step.id < currentStep) {
      return stepValidation[step.id]?.isValid ? 'completed' : 'error';
    } else if (step.id === currentStep) {
      return 'current';
    } else {
      return 'upcoming';
    }
  };

  const getStepIcon = (step) => {
    const status = getStepStatus(step);
    
    switch (status) {
      case 'completed':
        return <Check size={20} />;
      case 'current':
        return <Circle size={20} />;
      case 'error':
        return <Circle size={20} className={styles.errorIcon} />;
      case 'upcoming':
        return <Lock size={20} />;
      default:
        return <Circle size={20} />;
    }
  };

  const handleStepClick = (step) => {
    // Only allow clicking on completed steps or current step
    const status = getStepStatus(step);
    if (status === 'completed' || status === 'current' || status === 'error') {
      onStepClick(step.id);
    }
  };

  const getProgressWidth = () => {
    return ((currentStep - 1) / (steps.length - 1)) * 100;
  };

  return (
    <div className={`${styles.stepIndicator} ${className}`}>
      {/* Progress Bar Background */}
      <div className={styles.progressTrack}>
        <div 
          className={styles.progressFill}
          style={{ width: `${getProgressWidth()}%` }}
        />
      </div>

      {/* Steps */}
      <div className={styles.steps}>
        {steps.map((step, index) => {
          const status = getStepStatus(step);
          const isClickable = status === 'completed' || status === 'current' || status === 'error';
          
          return (
            <div
              key={step.id}
              className={`${styles.stepItem} ${styles[status]} ${isClickable ? styles.clickable : ''}`}
              onClick={() => handleStepClick(step)}
              role={isClickable ? 'button' : 'presentation'}
              tabIndex={isClickable ? 0 : -1}
              onKeyDown={(e) => {
                if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleStepClick(step);
                }
              }}
              aria-label={`Step ${step.id}: ${step.title} - ${status}`}
            >
              {/* Step Circle */}
              <div className={styles.stepCircle}>
                <div className={styles.stepIcon}>
                  {getStepIcon(step)}
                </div>
                <span className={styles.stepNumber}>{step.id}</span>
              </div>

              {/* Step Content */}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>

              {/* Validation Indicator */}
              {status === 'error' && (
                <div className={styles.validationError} aria-hidden="true">
                  <span className={styles.errorDot}></span>
                </div>
              )}

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className={styles.connectionLine} />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Progress Text */}
      <div className={styles.mobileProgress}>
        <span className={styles.progressText}>
          Step {currentStep} of {steps.length}: {steps.find(s => s.id === currentStep)?.title}
        </span>
        <div className={styles.mobileProgressBar}>
          <div 
            className={styles.mobileProgressFill}
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;