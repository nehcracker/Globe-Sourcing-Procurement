// src/components/Financing/FinancingForm/FormSidebar/SidebarCards/ProgressTracker.jsx
import React from 'react';
import { Check, Circle, Clock } from 'lucide-react';
import styles from './ProgressTracker.module.css';

const ProgressTracker = ({ currentStep, totalSteps, progress, onStepClick }) => {
  const steps = [
    { number: 1, title: 'Company Info', shortTitle: 'Company' },
    { number: 2, title: 'Trade Details', shortTitle: 'Trade' },
    { number: 3, title: 'Funding', shortTitle: 'Funding' },
    { number: 4, title: 'Declaration', shortTitle: 'Submit' },
  ];

  const estimateTimeRemaining = () => {
    const avgTimePerStep = 3;
    const remainingSteps = totalSteps - currentStep + 1;
    const minutes = remainingSteps * avgTimePerStep;
    return minutes <= 1 ? '< 1 min' : `~${minutes} mins`;
  };

  const handleStepClick = (stepNumber) => {
    if (stepNumber <= currentStep && onStepClick) {
      onStepClick(stepNumber);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.progressHeader}>
        <h3 className={styles.cardTitle}>Your Progress</h3>
        <div className={styles.progressPercentage}>
          {progress.percentage}%
        </div>
      </div>

      <div className={styles.progressRingContainer}>
        <svg className={styles.progressRing} width="120" height="120">
          <circle
            className={styles.progressRingCircle}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
            r="52"
            cx="60"
            cy="60"
          />
          <circle
            className={styles.progressRingCircleProgress}
            stroke="url(#progressGradient)"
            strokeWidth="8"
            fill="transparent"
            r="52"
            cx="60"
            cy="60"
            style={{
              strokeDasharray: `${2 * Math.PI * 52}`,
              strokeDashoffset: `${2 * Math.PI * 52 * (1 - progress.percentage / 100)}`,
            }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-accent-green)" />
              <stop offset="100%" stopColor="var(--color-accent-green-light)" />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.progressRingText}>
          <div className={styles.progressRingPercentage}>{progress.percentage}%</div>
          <div className={styles.progressRingLabel}>Complete</div>
        </div>
      </div>

      <div className={styles.progressStats}>
        <div className={styles.progressStat}>
          <div className={styles.progressStatIcon}>
            <Check size={16} />
          </div>
          <div className={styles.progressStatText}>
            <div className={styles.progressStatValue}>
              {progress.completed}/{progress.total}
            </div>
            <div className={styles.progressStatLabel}>Fields Completed</div>
          </div>
        </div>
        <div className={styles.progressStat}>
          <div className={styles.progressStatIcon}>
            <Clock size={16} />
          </div>
          <div className={styles.progressStatText}>
            <div className={styles.progressStatValue}>
              {estimateTimeRemaining()}
            </div>
            <div className={styles.progressStatLabel}>Time Remaining</div>
          </div>
        </div>
      </div>

      <div className={styles.stepsList}>
        {steps.map((step) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;
          const isClickable = step.number <= currentStep;

          return (
            <div
              key={step.number}
              className={`${styles.stepItem} ${
                isCompleted ? styles.completed : ''
              } ${isCurrent ? styles.current : ''} ${
                isClickable ? styles.clickable : styles.disabled
              }`}
              onClick={() => handleStepClick(step.number)}
              role="button"
              tabIndex={isClickable ? 0 : -1}
            >
              <div className={styles.stepIcon}>
                {isCompleted ? (
                  <Check size={16} strokeWidth={3} />
                ) : (
                  <span className={styles.stepNumber}>{step.number}</span>
                )}
              </div>
              <div className={styles.stepInfo}>
                <div className={styles.stepTitle}>{step.title}</div>
                {isCurrent && (
                  <div className={styles.stepStatus}>In Progress</div>
                )}
                {isCompleted && (
                  <div className={styles.stepStatus}>Completed</div>
                )}
              </div>
              {isCurrent && (
                <div className={styles.currentIndicator}>
                  <Circle size={8} fill="currentColor" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;