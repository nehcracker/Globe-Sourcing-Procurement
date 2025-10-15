// src/pages/VendorRegistration/hooks/useMultiStepForm.js
import { useState, useCallback, useEffect } from 'react';
// import { useFormAnalytics } from './useFormAnalytics';

// Form steps configuration
const FORM_STEPS = [
  {
    id: 1,
    name: 'company_info',
    title: 'Company Information',
    description: 'Basic company details and contact information',
    fields: ['companyName', 'contactPerson', 'email', 'phone', 'country', 'businessRegNumber']
  },
  {
    id: 2,
    name: 'product_details',
    title: 'Product Details',
    description: 'Product information, MOQ, and pricing',
    fields: ['productCategory', 'productDescription', 'moq', 'packaging', 'unitPrice', 'currency']
  },
  {
    id: 3,
    name: 'business_credentials',
    title: 'Business Credentials',
    description: 'Certifications and document uploads',
    fields: ['certifications', 'files', 'references']
  },
  {
    id: 4,
    name: 'review_submit',
    title: 'Review & Submit',
    description: 'Review your information and submit application',
    fields: ['termsAccepted', 'marketingConsent']
  }
];

export const useMultiStepForm = (initialData = {}) => {
  // Current step state
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    businessRegNumber: '',
    
    // Product Details
    productCategory: '',
    productSubcategory: '',
    productDescription: '',
    moq: '',
    packaging: '',
    unitPrice: '',
    currency: 'USD',
    
    // Business Credentials
    certifications: '',
    files: [],
    references: '',
    
    // Review & Submit
    termsAccepted: false,
    marketingConsent: false,
    
    // Merge with initial data
    ...initialData
  });
  
  // Step validation state
  const [stepValidation, setStepValidation] = useState({
    1: { isValid: false, errors: {} },
    2: { isValid: false, errors: {} },
    3: { isValid: false, errors: {} },
    4: { isValid: false, errors: {} }
  });
  
  // Step completion tracking
  const [stepCompletion, setStepCompletion] = useState({
    1: { completed: false, timeSpent: 0, startTime: null },
    2: { completed: false, timeSpent: 0, startTime: null },
    3: { completed: false, timeSpent: 0, startTime: null },
    4: { completed: false, timeSpent: 0, startTime: null }
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  
  // Analytics - commented out for now
  // const { 
  //   trackStepStart, 
  //   trackStepComplete, 
  //   trackStepValidationError,
  //   trackFormAbandon 
  // } = useFormAnalytics();

  // Initialize step timing on step change
  useEffect(() => {
    const stepInfo = stepCompletion[currentStep];
    if (!stepInfo.startTime) {
      setStepCompletion(prev => ({
        ...prev,
        [currentStep]: {
          ...prev[currentStep],
          startTime: Date.now()
        }
      }));
      
      // Track step start (disabled for now)
      const stepConfig = FORM_STEPS.find(step => step.id === currentStep);
      console.log(`Started step ${currentStep}: ${stepConfig?.name || 'unknown'}`);
    }
  }, [currentStep, stepCompletion]);

  // Form data updater
  const updateFormData = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // Bulk form data update
  const updateMultipleFields = useCallback((updates) => {
    setFormData(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  // Step validation updater
  const updateStepValidation = useCallback((step, isValid, errors = {}) => {
    setStepValidation(prev => ({
      ...prev,
      [step]: { isValid, errors }
    }));
    
    // Track validation errors (disabled for now)
    if (!isValid && Object.keys(errors).length > 0) {
      const stepConfig = FORM_STEPS.find(s => s.id === step);
      console.log(`Validation errors in step ${step} (${stepConfig?.name}):`, Object.keys(errors));
    }
  }, []);

  // Navigation functions
  const goToStep = useCallback((stepNumber) => {
    if (stepNumber < 1 || stepNumber > FORM_STEPS.length) return;
    
    setIsTransitioning(true);
    
    // Complete previous step timing
    const prevStepInfo = stepCompletion[currentStep];
    if (prevStepInfo.startTime && !prevStepInfo.completed) {
      const timeSpent = Date.now() - prevStepInfo.startTime;
      setStepCompletion(prev => ({
        ...prev,
        [currentStep]: {
          ...prev[currentStep],
          completed: true,
          timeSpent: timeSpent
        }
      }));
      
      // Track step completion (disabled for now)
      const stepConfig = FORM_STEPS.find(step => step.id === currentStep);
      const validationErrors = Object.keys(stepValidation[currentStep].errors).length;
      console.log(`Completed step ${currentStep} (${stepConfig?.name}) in ${timeSpent}ms with ${validationErrors} errors`);
    }
    
    // Scroll to top of form
    const formElement = document.querySelector('.multiStepForm') || document.querySelector('[class*="multiStepForm"]');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback to window scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    setTimeout(() => {
      setCurrentStep(stepNumber);
      setIsTransitioning(false);
    }, 150);
  }, [currentStep, stepCompletion, stepValidation]);

  const nextStep = useCallback(() => {
    const currentStepValidation = stepValidation[currentStep];
    if (!currentStepValidation.isValid) {
      // Don't proceed if current step is invalid
      return false;
    }
    
    if (currentStep < FORM_STEPS.length) {
      goToStep(currentStep + 1);
      return true;
    }
    return false;
  }, [currentStep, stepValidation, goToStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
      return true;
    }
    return false;
  }, [currentStep, goToStep]);

  // Progress calculation
  const getProgress = useCallback(() => {
    return (currentStep / FORM_STEPS.length) * 100;
  }, [currentStep]);

  const getCompletionPercentage = useCallback(() => {
    const completedSteps = Object.values(stepCompletion).filter(step => step.completed).length;
    return (completedSteps / FORM_STEPS.length) * 100;
  }, [stepCompletion]);

  // Step info helpers
  const getCurrentStepInfo = useCallback(() => {
    return FORM_STEPS.find(step => step.id === currentStep) || FORM_STEPS[0];
  }, [currentStep]);

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === FORM_STEPS.length;

  // Form completion check
  const isFormComplete = useCallback(() => {
    return Object.values(stepValidation).every(step => step.isValid);
  }, [stepValidation]);

  // Form reset
  const resetForm = useCallback(() => {
    setCurrentStep(1);
    setFormData({
      // Company Information
      companyName: '', 
      contactPerson: '', 
      email: '', 
      phone: '', 
      country: '', 
      businessRegNumber: '',
      // Product Details
      productCategory: '',
      productSubcategory: '',
      productDescription: '',
      moq: '',
      packaging: '',
      unitPrice: '',
      currency: 'USD',
      // Business Credentials
      certifications: '', 
      files: [], 
      references: '',
      // Review & Submit
      termsAccepted: false, 
      marketingConsent: false
    });
    setStepValidation({
      1: { isValid: false, errors: {} },
      2: { isValid: false, errors: {} },
      3: { isValid: false, errors: {} },
      4: { isValid: false, errors: {} }
    });
    setStepCompletion({
      1: { completed: false, timeSpent: 0, startTime: null },
      2: { completed: false, timeSpent: 0, startTime: null },
      3: { completed: false, timeSpent: 0, startTime: null },
      4: { completed: false, timeSpent: 0, startTime: null }
    });
    setIsSubmitted(false);
    setSubmissionError(null);
  }, []);

  // Form abandonment tracking (disabled for now)
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (!isSubmitted && currentStep > 1) {
        const completionPercentage = getCompletionPercentage();
        console.log(`Form abandoned at step ${currentStep}, ${completionPercentage}% complete`);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Track abandonment if form was started but not completed (disabled)
      if (!isSubmitted && currentStep > 1) {
        const completionPercentage = getCompletionPercentage();
        console.log(`Form component unmounted at step ${currentStep}, ${completionPercentage}% complete`);
      }
    };
      }, [currentStep, isSubmitted, getCompletionPercentage]);

  return {
    // Step management
    currentStep,
    goToStep,
    nextStep,
    prevStep,
    isTransitioning,
    
    // Step info
    getCurrentStepInfo,
    isFirstStep,
    isLastStep,
    formSteps: FORM_STEPS,
    
    // Form data
    formData,
    updateFormData,
    updateMultipleFields,
    
    // Validation
    stepValidation,
    updateStepValidation,
    isFormComplete,
    
    // Progress
    getProgress,
    getCompletionPercentage,
    stepCompletion,
    
    // Submission
    isSubmitting,
    setIsSubmitting,
    isSubmitted,
    setIsSubmitted,
    submissionError,
    setSubmissionError,
    
    // Utilities
    resetForm
  };
};
