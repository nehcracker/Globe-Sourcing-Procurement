// Src/components/Financing/FinancingForm/FormComponents/ProgressBar.jsx
import React from 'react';
import { Check } from 'lucide-react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ currentStep, totalSteps = 4, steps }) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const defaultSteps = [
    { number: 1, title: 'Company Info', shortTitle: 'Company' },
    { number: 2, title: 'Trade Details', shortTitle: 'Trade' },
    { number: 3, title: 'Funding', shortTitle: 'Funding' },
    { number: 4, title: 'Declaration', shortTitle: 'Submit' },
  ];

  const stepsList = steps || defaultSteps;

  return (
    <div className={styles.progressBar}>
      {/* Progress line background */}
      <div className={styles.progressLine}>
        <div 
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Steps */}
      <div className={styles.stepsContainer}>
        {stepsList.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          const isFuture = stepNumber > currentStep;

          return (
            <div
              key={stepNumber}
              className={`${styles.step} ${
                isCompleted ? styles.completed :
                isActive ? styles.active :
                isFuture ? styles.future :
                styles.future
              }`}
            >
              {/* Step circle */}
              <div className={styles.stepCircle}>
                {isCompleted ? (
                  <Check size={18} strokeWidth={3} />
                ) : (
                  <span className={styles.stepNumber}>{stepNumber}</span>
                )}
              </div>

              {/* Step label */}
              <div className={styles.stepLabel}>
                <span className={styles.stepTitle}>
                  {step.shortTitle || step.title}
                </span>
                <span className={styles.stepTitleFull}>
                  {step.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;