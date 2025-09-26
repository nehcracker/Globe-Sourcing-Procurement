// src/pages/VendorRegistration/components/MultiStepForm/NavigationButtons.jsx
import React from 'react';
import { ArrowLeft, ArrowRight, Send, Save, Loader2 } from 'lucide-react';
import styles from './NavigationButtons.module.css';

const NavigationButtons = ({
  currentStep,
  totalSteps,
  isFirstStep,
  isLastStep,
  isCurrentStepValid,
  isSubmitting,
  canGoBack = true,
  canGoNext = true,
  onPrevious,
  onNext,
  onSubmit,
  onSaveDraft,
  showSaveDraft = true,
  className = ''
}) => {
  const handlePrevious = () => {
    console.log('Previous button clicked');
    onPrevious();
  };

  const handleNext = () => {
    if (!isCurrentStepValid) {
      console.log('Next attempted but step invalid');
      return;
    }
    
    console.log('Next button clicked');
    onNext();
  };

  const handleSubmit = () => {
    if (!isCurrentStepValid) {
      console.log('Submit attempted but step invalid');
      return;
    }
    
    console.log('Submit button clicked');
    onSubmit();
  };

  const handleSaveDraft = () => {
    console.log('Save draft clicked');
    onSaveDraft();
  };

  return (
    <div className={`${styles.navigationButtons} ${className}`}>
      {/* Left Side - Previous & Save Draft */}
      <div className={styles.leftButtons}>
        {/* Previous Button */}
        {!isFirstStep && (
          <button
            type="button"
            onClick={handlePrevious}
            disabled={!canGoBack || isSubmitting}
            className={styles.previousButton}
            aria-label="Go to previous step"
          >
            <ArrowLeft size={18} />
            <span>Previous</span>
          </button>
        )}

        {/* Save Draft Button */}
        {showSaveDraft && !isLastStep && (
          <button
            type="button"
            onClick={handleSaveDraft}
            disabled={isSubmitting}
            className={styles.saveDraftButton}
            aria-label="Save progress as draft"
          >
            <Save size={16} />
            <span className={styles.saveDraftText}>Save Draft</span>
          </button>
        )}
      </div>

      {/* Center - Progress Indicator */}
      <div className={styles.centerProgress}>
        <div className={styles.progressInfo}>
          <span className={styles.stepCounter}>
            {currentStep} of {totalSteps}
          </span>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Right Side - Next & Submit */}
      <div className={styles.rightButtons}>
        {!isLastStep ? (
          // Next Button
          <button
            type="button"
            onClick={handleNext}
            disabled={!isCurrentStepValid || !canGoNext || isSubmitting}
            className={`${styles.nextButton} ${!isCurrentStepValid ? styles.invalid : ''}`}
            aria-label="Continue to next step"
          >
            <span>Continue</span>
            <ArrowRight size={18} />
          </button>
        ) : (
          // Submit Button
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isCurrentStepValid || isSubmitting}
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${!isCurrentStepValid ? styles.invalid : ''}`}
            aria-label="Submit vendor application"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className={styles.spinner} />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Submit Application</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Validation Message */}
      {!isCurrentStepValid && (
        <div className={styles.validationMessage}>
          <span className={styles.validationText}>
            Please complete all required fields before continuing
          </span>
        </div>
      )}
    </div>
  );
};

export default NavigationButtons;