// Src/components/Financing/FinancingForm/FinancingForm.jsx
import React, { useState, useRef, useEffect } from 'react';
import ProgressBar from './FormComponents/ProgressBar';
import FormNavigation from './FormComponents/FormNavigation';
import Step1CompanyInfo from './FormSteps/Step1CompanyInfo';
import Step2TradeInfo from './FormSteps/Step2TradeInfo';
import Step3FundingDetails from './FormSteps/Step3FundingDetails';
import Step4Declaration from './FormSteps/Step4Declaration';
import SubmissionSuccess from './SubmissionSuccess';
import useFormValidation from '../../../hooks/useFormValidation';
import styles from './FinancingForm.module.css';

const FinancingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  // Ref to the form content container for smooth scrolling
  const formContentRef = useRef(null);

  const { errors, validateStep, clearAllErrors } = useFormValidation();

  // Initial form data
  const [formData, setFormData] = useState({
    // Step 1: Company Information
    companyName: '',
    registrationNumber: '',
    country: '',
    website: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',

    // Step 2: Trade Information
    transactionType: '',
    productDescription: '',
    originCountry: '',
    destinationCountry: '',
    transactionValue: '',
    currency: '',
    paymentTerms: '',

    // Step 3: Funding Details
    financingType: '',
    financingAmount: '',
    repaymentPeriod: '',
    bankingRelationship: '',
    tradeExperience: '',
    bankName: '',
    additionalInfo: '',

    // Step 4: Declaration
    agreeTerms: false,
    agreePrivacy: false,
    declareAccuracy: false,
    marketingConsent: false,
  });

  // Smooth scroll to top of form content
  const scrollToFormTop = () => {
    if (formContentRef.current) {
      formContentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle input blur (optional - for real-time validation)
  const handleBlur = (e) => {
    // You can add individual field validation here if needed
  };

  // Navigate to next step
  const handleNext = () => {
    // Validate current step
    const isValid = validateStep(currentStep, formData);
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      clearAllErrors();
      // Scroll to top of form content smoothly
      scrollToFormTop();
    } else {
      // Scroll to first error within the form content
      const firstError = document.querySelector('[aria-invalid="true"]');
      if (firstError && formContentRef.current) {
        const formContentRect = formContentRef.current.getBoundingClientRect();
        const errorRect = firstError.getBoundingClientRect();
        const scrollTop = errorRect.top - formContentRect.top + formContentRef.current.scrollTop - 100;
        
        formContentRef.current.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
        
        setTimeout(() => firstError.focus(), 300);
      }
    }
  };

  // Navigate to previous step
  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    clearAllErrors();
    // Scroll to top of form content smoothly
    scrollToFormTop();
  };

  // Generate reference number
  const generateReferenceNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `FIN-${timestamp}-${random}`;
  };

  // Mock email sending function
  const sendConfirmationEmail = async (data, refNumber) => {
    // This is a mock function - replace with actual API call
    console.log('📧 Sending confirmation email...');
    console.log('To:', data.email);
    console.log('Reference Number:', refNumber);
    console.log('Application Data:', data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validate final step
    const isValid = validateStep(4, formData);
    
    if (!isValid) {
      const firstError = document.querySelector('[aria-invalid="true"]');
      if (firstError && formContentRef.current) {
        const formContentRect = formContentRef.current.getBoundingClientRect();
        const errorRect = firstError.getBoundingClientRect();
        const scrollTop = errorRect.top - formContentRect.top + formContentRef.current.scrollTop - 100;
        
        formContentRef.current.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate reference number
      const refNumber = generateReferenceNumber();
      setReferenceNumber(refNumber);

      // Mock API submission
      console.log('📝 Submitting financing application...');
      console.log('Reference Number:', refNumber);
      console.log('Form Data:', formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Send confirmation email (mock)
      await sendConfirmationEmail(formData, refNumber);

      // Success!
      setIsSubmitted(true);
      scrollToFormTop();

      console.log('✅ Application submitted successfully!');
      console.log('📧 Confirmation email sent to:', formData.email);

    } catch (error) {
      console.error('❌ Submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to top when step changes
  useEffect(() => {
    scrollToFormTop();
  }, [currentStep]);

  // If submitted, show success page
  if (isSubmitted) {
    return (
      <SubmissionSuccess
        referenceNumber={referenceNumber}
        email={formData.email}
        companyName={formData.companyName}
      />
    );
  }

  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1CompanyInfo
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        );
      case 2:
        return (
          <Step2TradeInfo
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        );
      case 3:
        return (
          <Step3FundingDetails
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        );
      case 4:
        return (
          <Step4Declaration
            formData={formData}
            errors={errors}
            onChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.financingForm}>
      <div className={styles.container}>
        {/* Form Header */}
        <div className={styles.formHeader}>
          <h1 className={styles.formTitle}>Trade Financing Application</h1>
          <p className={styles.formSubtitle}>
            Complete this form to apply for import/export financing. Our team will review your 
            application and contact you within 48-72 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className={styles.formCard}>
          {/* Progress Bar */}
          <ProgressBar currentStep={currentStep} totalSteps={4} />

          {/* Form Content with ref for scrolling */}
          <div 
            ref={formContentRef}
            className={styles.formContent}
          >
            {renderStep()}
          </div>

          {/* Navigation */}
          <FormNavigation
            currentStep={currentStep}
            totalSteps={4}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            canGoNext={true}
            showPrevious={true}
          />
        </div>

        {/* Help Section */}
        <div className={styles.helpSection}>
          <p className={styles.helpText}>
            Need assistance? Contact our financing team at{' '}
            <a href="mailto:financing@globesourceprocurement.com" className={styles.helpLink}>
              info@globesourceprocurement.com
            </a>
          </p>
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

export default FinancingForm;