// Src/components/Financing/FinancingForm/FormComponents/FormNavigation.jsx
import React from 'react';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';
import styles from './FormNavigation.module.css';

const FormNavigation = ({
  currentStep,
  totalSteps = 4,
  onPrevious,
  onNext,
  onSubmit,
  isSubmitting = false,
  canGoNext = true,
  showPrevious = true,
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  const handlePrevious = () => {
    if (onPrevious && !isFirstStep) {
      onPrevious();
    }
  };

  const handleNext = () => {
    if (onNext && !isLastStep && canGoNext) {
      onNext();
    }
  };

  const handleSubmit = () => {
    if (onSubmit && isLastStep && !isSubmitting) {
      onSubmit();
    }
  };

  return (
    <div className={styles.navigation}>
      {/* Previous button */}
      {showPrevious && !isFirstStep && (
        <button
          type="button"
          onClick={handlePrevious}
          className={`${styles.button} ${styles.previousButton}`}
          disabled={isSubmitting}
        >
          <ChevronLeft size={20} />
          <span>Previous</span>
        </button>
      )}

      {/* Spacer for alignment when no previous button */}
      {(isFirstStep || !showPrevious) && <div className={styles.spacer} />}

      {/* Next or Submit button */}
      {!isLastStep ? (
        <button
          type="button"
          onClick={handleNext}
          className={`${styles.button} ${styles.nextButton}`}
          disabled={!canGoNext || isSubmitting}
        >
          <span>Next Step</span>
          <ChevronRight size={20} />
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className={`${styles.button} ${styles.submitButton}`}
          disabled={isSubmitting || !canGoNext}
        >
          {isSubmitting ? (
            <>
              <div className={styles.spinner} />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit Application</span>
              <Send size={20} />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default FormNavigation;