// src/pages/VendorRegistration/hooks/useFormAnalytics.js
import { useCallback } from 'react';

export const useFormAnalytics = () => {
  // Simple console logging instead of real analytics for Phase 1
  
  const trackPageView = useCallback((pageName) => {
    console.log('📊 Analytics: Page View -', pageName);
  }, []);

  const trackFormEvent = useCallback((eventName, parameters = {}) => {
    console.log('📊 Analytics: Form Event -', eventName, parameters);
  }, []);

  const trackStepStart = useCallback((stepNumber, stepName) => {
    console.log('📊 Analytics: Step Start -', stepNumber, stepName);
  }, []);

  const trackStepComplete = useCallback((stepNumber, stepName, timeSpent = 0, validationErrors = 0) => {
    console.log('📊 Analytics: Step Complete -', stepNumber, stepName, `${timeSpent}ms`, `${validationErrors} errors`);
  }, []);

  const trackStepValidationError = useCallback((stepNumber, stepName, errors = []) => {
    console.log('📊 Analytics: Validation Error -', stepNumber, stepName, errors);
  }, []);

  const trackFormAbandon = useCallback((stepNumber, completionPercentage = 0, reason = 'unknown') => {
    console.log('📊 Analytics: Form Abandon -', stepNumber, `${completionPercentage}%`, reason);
  }, []);

  const trackFormSubmissionStart = useCallback(() => {
    console.log('📊 Analytics: Form Submission Start');
  }, []);

  const trackFormSubmissionSuccess = useCallback((formData = {}) => {
    console.log('📊 Analytics: Form Submission Success', {
      company: formData.companyName || 'unknown',
      category: formData.productCategory || 'unknown'
    });
  }, []);

  const trackFormSubmissionError = useCallback((error = 'unknown', stepNumber = 0) => {
    console.log('📊 Analytics: Form Submission Error -', error, 'at step', stepNumber);
  }, []);

  const trackFileUpload = useCallback((fileType, fileSize, stepNumber) => {
    console.log('📊 Analytics: File Upload -', fileType, `${fileSize} bytes`, 'at step', stepNumber);
  }, []);

  const trackScrollDepth = useCallback((scrollPercentage) => {
    console.log('📊 Analytics: Scroll Depth -', `${scrollPercentage}%`);
  }, []);

  const trackTimeOnPage = useCallback((timeSpent) => {
    console.log('📊 Analytics: Time on Page -', `${Math.floor(timeSpent / 1000)}s`);
  }, []);

  const trackButtonClick = useCallback((buttonName, context = 'unknown') => {
    console.log('📊 Analytics: Button Click -', buttonName, 'in', context);
  }, []);

  return {
    // Page tracking
    trackPageView,
    
    // Form step tracking
    trackStepStart,
    trackStepComplete,
    trackStepValidationError,
    
    // Form flow tracking
    trackFormAbandon,
    trackFormSubmissionStart,
    trackFormSubmissionSuccess,
    trackFormSubmissionError,
    
    // File and interaction tracking
    trackFileUpload,
    trackButtonClick,
    
    // Engagement tracking
    trackScrollDepth,
    trackTimeOnPage,
    
    // Generic event tracking
    trackFormEvent
  };
};